import { useEmails } from '../../hooks/useEmails';
import { Drink, Meat, Rsvp, Transportation } from '../../types';
import { Content } from '../content';

export const SaveTheDateTab = () => {
    const { sendEmail, status } = useEmails();

    return (
        <div>
            <Content children={
                <div>
                    <div>{'Hello'}</div>
                    <h1>{'Heading One'}</h1>
                    <h2>{'Heading Two'}</h2>
                    <h3>{'Heading Three'}</h3>
                    <p>{'Paragrahs will use this styling'}</p>
                </div>
            }/>
            <Content children={
                <div>
                    <div>{'August 29, 2026'}</div>
                    <button onClick={() => sendEmail({rsvpId: '12345', rsvp: [
                            {
                                firstName: 'Aiden',
                                lastName: 'Duffy',
                                attending: true,
                                meat: Meat.Salmon,
                                drink: Drink.White,
                                transportation: Transportation.Wingham,
                                notes: ''
                            },
                            {
                                firstName: 'Brooklyn',
                                lastName: 'Wright',
                                attending: true,
                                meat: Meat.Beef,
                                drink: Drink.Red,
                                transportation: Transportation.Wingham,
                                notes: 'lots of gravy'
                            },
                            {
                                firstName: 'Mitzy',
                                lastName: 'Cat',
                                attending: false,
                                meat: null,
                                drink: null,
                                transportation: null,
                                notes: 'no wet food so I am not coming'
                            }
                        ]})}>Test email</button>
                    <div>{status}</div>
                </div>
            }/>
        </div>
    );
}