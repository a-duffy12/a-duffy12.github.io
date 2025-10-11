import { useCallback, useState } from 'react';
import { Drink, Meat, Rsvp, Transportation } from '../types';
import emailjs from '@emailjs/browser';
import { email, emailJsPublicKey, emailJsServiceId, emailJsTemplateId } from '../constants';

interface IRsvpEmailFields {
    rsvpId: string;
    rsvp: Rsvp[];
}

export const useEmails = () => {
    const [ status, setStatus ] = useState<number>();

    const sendEmail = useCallback(async ({ rsvpId, rsvp }: IRsvpEmailFields) => {
        try {
            const guestsString = rsvp.map(r => `
                Name: ${r.firstName} ${r.lastName}
                Attending: ${r.attending ? 'Yes' : 'No'} 
                Meat: ${r.meat !== null ? Meat[r.meat] : 'n/a'} 
                Drink: ${r.drink !== null ? Drink[r.drink] : 'n/a'}  
                Transportation: ${r.transportation !== null ? Transportation[r.transportation] : 'n/a'}
                Notes: ${r.notes}
            `).join('\n');

            const rsvpDetails = `Total attending: ${rsvp.filter(r => r.attending).length}\n 
            Guests: \n\n
            ${guestsString}
            `

            const response = await emailjs.send(emailJsServiceId, emailJsTemplateId, {
                email: email,
                rsvp_id: rsvpId,
                rsvp_details: rsvpDetails
            }, emailJsPublicKey);
            setStatus(response.status);
        } catch (error) {
            console.error(`EmailJS error: ${error}`);
            setStatus(500);
        }
    }, [ email, emailJsServiceId, emailJsTemplateId, emailJsPublicKey ]);

    return { 
        sendEmail,
        status
    };

}