import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';
import { email, emailJsPublicKey, emailJsServiceId, emailJsTemplateId } from '../constants';
import { RsvpData } from '../helpers/rsvpSchema';

interface IRsvpEmailFields {
    rsvp: RsvpData;
}

export const useEmails = () => {
    const [ status, setStatus ] = useState<number>();

    const sendEmail = useCallback(async ({ rsvp }: IRsvpEmailFields) => {
        try {
            const rsvpsString = rsvp.rsvps.map(r => `
                Name: ${r.name ?? ''}
                Attending: ${r.attending ? 'Yes' : 'No'} 
                Meal: ${r.meal ?? ''}
                Notes: ${r.dietaryNeeds ?? ''}
            `).join('\n');

            const rsvpDetails = `Total attending: ${rsvp.rsvps.filter(r => r.attending).length}\n 
            Guests: \n\n
            ${rsvpsString}
            `

            const response = await emailjs.send(emailJsServiceId, emailJsTemplateId, {
                email: email,
                rsvp_id: rsvp.code.toString(),
                rsvp_details: rsvpDetails
            }, emailJsPublicKey);
            
            setStatus(response.status);
            console.log(`Email request sent with response status ${status}.`);
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