import { useEffect, useState } from 'react';

const rsvpKey = 'rsvp';

export const useRsvp = () => {
    const [ rsvp, setRsvp ] = useState<boolean>(() => {
        return localStorage.getItem(rsvpKey) === 'true';
    });

    useEffect(() => {
        localStorage.setItem(rsvpKey, String(rsvp));
    }, [ rsvp ]);

    return {
        rsvp,
        setRsvp
    };
}