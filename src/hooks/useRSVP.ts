import { useEffect, useState } from 'react';
import { z } from 'zod';
import { DinnerChoice, RsvpCode, rsvpCountMap, rsvpDinnerMap } from '../constants';

const rsvpKey = 'rsvp';

export const useRsvp = () => {
    const [ rsvpSubmitted, setRsvpSubmitted ] = useState<boolean>(() => {
        return localStorage.getItem(rsvpKey) === 'true';
    });

    useEffect(() => {
        localStorage.setItem(rsvpKey, String(rsvpSubmitted));
    }, [ rsvpSubmitted ]);

    const rsvpForm = {};

    return {
        rsvpSubmitted,
        setRsvpSubmitted,
        rsvpForm
    };
};

const rsvpSchema = z.object({
    code: z.enum(RsvpCode, {
        error: () => ({ message: 'Please enter a valid code. It can be found on your invitation.'})
    }),
    rsvps: z.array(
        z.object({
            name: z.string().min(1, 'Name is required'),
            attending: z.boolean(),
            meal: z.enum(DinnerChoice).optional(),
            dietaryNeeds: z.string().optional()
        })
    )
}).superRefine((data, ctx) => {
    const expectedCount = rsvpCountMap[data.code];
    const actualCount = data.rsvps.length;

    if (expectedCount !== actualCount) {
        ctx.addIssue({
            code: 'custom',
            message: `Please provide RSVP details for the ${expectedCount} invitees.`,
            path: ['rsvps']
        })
    }


    const atDinner = rsvpDinnerMap[data.code];

    if (atDinner) {
        data.rsvps.forEach((guest, index) => {
            if (guest.attending && !guest.meal) {
                ctx.addIssue({
                    code: 'custom',
                    message: 'Meal choice is required',
                    path: ['rsvps', index, 'meal']
                })
            }
        })
    }
});

const rsvpDefaultValues = {};