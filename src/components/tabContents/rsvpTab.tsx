import { useRsvp } from '../../hooks/useRSVP';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RsvpData, rsvpDefaultValues, rsvpSchema, } from '../../helpers/rsvpSchema';
import { useEffect, useMemo, useState } from 'react';
import { rsvpCountMap, rsvpDinnerMap, rsvpPlusOneMap } from '../../constants';

export const RsvpTab = () => {
    const { rsvpSubmitted, setRsvpSubmitted } = useRsvp();
    const { control, handleSubmit, watch, formState: { errors } } = useForm<RsvpData>({
        resolver: zodResolver(rsvpSchema),
        defaultValues: rsvpDefaultValues
    });

    const { fields, replace } = useFieldArray({
        control,
        name: 'rsvps'
    });

    const watchedCode = watch('code');
    const watchedPlusOne = watch('bringingPlusOne');
    const showDinnerFields = useMemo(() => rsvpDinnerMap[watchedCode], [ rsvpDinnerMap, watchedCode ]);
    const showPlusOneForm = useMemo(() => rsvpPlusOneMap[watchedCode] && watchedPlusOne, [ rsvpPlusOneMap, watchedCode, watchedPlusOne ]);

    useEffect(() => {
        if (watchedCode && rsvpCountMap[watchedCode]) {
            const rsvpsCount = rsvpCountMap[watchedCode] + (watchedPlusOne ? 1 : 0);

            const refreshedRsvps = Array(rsvpsCount).fill(null).map(() => ({
                name: '',
                attending: true,
                meal: undefined,
                dietaryNeeds: ''
            }));
            replace(refreshedRsvps);
        }
    }, [ watchedCode, rsvpCountMap, replace ]);

    const onsubmit = (data: RsvpData) => {
        // TODO send email
        setRsvpSubmitted(true);
    };


    return (
        <div>RSVP</div>
    );
}