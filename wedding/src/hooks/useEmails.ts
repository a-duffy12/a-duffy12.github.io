import { useCallback, useState } from 'react';
import { Rsvp, RsvpDetails } from '../types';
import emailjs from '@emailjs/browser';
import { emailJsPublicKey, emailJsServiceId, emailJsTemplateId } from '../constants';
import { useConfig } from '../contexts/configContext';
import { useRsvp } from './useRSVP';

interface IRsvpEmailFields {
    rsvpId: string;
    rsvpDetails: Rsvp[];
}

export const useEmails = () => {
    const [ status, setStatus ] = useState<number>();

    const sendEmail = useCallback(async ({ rsvpId, rsvpDetails }: IRsvpEmailFields) => {
        try {
            const response = await emailjs.send(emailJsServiceId, emailJsTemplateId, {
                rsvpId,
                rsvpDetails.map(r => ({
                    first_name: r.firstName,
                    last_name: r.lastName,
                    meat: r.meat.toString() || '',
                    drink: r.drink.toString() || '',
                    transportation: r.transportation.toString() || '',
                    attending: r.attending ? 'Yes' : 'No'
                }) as RsvpDetails)
            }, emailJsPublicKey);
            setStatus(response.status);
        } catch (error) {
            console.error(`EmailJS error: ${error}`);
            setStatus(500);
        }
    }, [ status, emailjs ]);

    return { 
        sendEmail,
        status
    };

}