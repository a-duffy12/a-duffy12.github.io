import { useEffect, useState } from 'react';

const rsvpKey = 'rsvp';

export const useRsvp = () => {
    const [ rsvpSubmitted, setRsvpSubmitted ] = useState<boolean>(() => {
        return localStorage.getItem(rsvpKey) === 'true';
    });

    useEffect(() => {
        localStorage.setItem(rsvpKey, String(rsvpSubmitted));
    }, [ rsvpSubmitted ]);

    return {
        rsvpSubmitted,
        setRsvpSubmitted
    };
}