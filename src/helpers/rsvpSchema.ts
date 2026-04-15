import { z } from 'zod';
import { DinnerChoice, RsvpCode, rsvpCountMap, rsvpDinnerMap, rsvpPlusOneMap } from '../constants';

const stringFieldRegex =  /^[a-zA-Z0-9\s,.]*$/;

export const rsvpSchema = z.object({
    code: z.enum(RsvpCode, {
        error: () => ({ message: 'Please enter a valid code. It can be found on your invitation.'})
    }),
    bringingPlusOne: z.boolean(),
    rsvps: z.array(
        z.object({
            name: z.string().optional().refine(val => !val || stringFieldRegex.test(val), {
                message: "Input can only contain letters, numbers, commas, and periods."
            }),
            attending: z.boolean(),
            meal: z.union([z.enum(DinnerChoice).optional(), z.string().max(0).optional()]),
            dietaryNeeds: z.string().optional().refine(val => !val || stringFieldRegex.test(val), {
                message: "Input can only contain letters, numbers, commas, and periods."
            })
        }).superRefine((guest, ctx) => {
            if (guest.attending && (!guest.name || guest.name.trim() === '')) {
                ctx.addIssue({
                    code: 'custom',
                    message: 'Name is required for attending guests.',
                    path: ['name']
                });
            }
        })
    )
}).superRefine((data, ctx) => {
    const canHavePlusOne = rsvpPlusOneMap[data.code];
    if (data.bringingPlusOne && !canHavePlusOne) {
        ctx.addIssue({
            code: 'custom',
            message: 'This invitation is not eligible for a plus one.',
            path: ['bringingPlusOne']
        });
    }
    
    const expectedCount = (rsvpCountMap[data.code] || 0) + (data.bringingPlusOne ? 1 : 0);
    const actualCount = data.rsvps.length;

    if (expectedCount > 0 && expectedCount !== actualCount) {
        ctx.addIssue({
            code: 'custom',
            message: `Please provide RSVP details for the ${expectedCount} invitees.`,
            path: ['rsvps']
        });
    }

    const atDinner = rsvpDinnerMap[data.code];

    if (atDinner) {
        data.rsvps.forEach((guest, index) => {
            if (guest.attending && !guest.meal) {
                ctx.addIssue({
                    code: 'custom',
                    message: 'Meal choice is required',
                    path: ['rsvps', index, 'meal']
                });
            }
        });
    }
});

export type RsvpData = z.infer<typeof rsvpSchema>;

export const rsvpDefaultValues = {
    code: undefined,
    bringingPlusOne: false,
    rsvps: []
};
