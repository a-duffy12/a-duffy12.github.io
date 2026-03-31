import { z } from 'zod';
import { DinnerChoice, RsvpCode, rsvpCountMap, rsvpDinnerMap, rsvpPlusOneMap } from '../constants';

export const rsvpSchema = z.object({
    code: z.enum(RsvpCode, {
        error: () => ({ message: 'Please enter a valid code. It can be found on your invitation.'})
    }),
    bringingPlusOne: z.boolean(),
    rsvps: z.array(
        z.object({
            name: z.string().min(1, 'Name is required'),
            attending: z.boolean(),
            meal: z.enum(DinnerChoice).optional(),
            dietaryNeeds: z.string().optional()
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
    
    const expectedCount = rsvpCountMap[data.code] + (data.bringingPlusOne ? 1 : 0);
    const actualCount = data.rsvps.length;

    if (expectedCount !== actualCount) {
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
