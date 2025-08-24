import { useEmails } from '../../hooks/useEmails';
import { Drink, Meat, Rsvp, Transportation } from '../../types';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { Button } from '../button';

export const SaveTheDateTab = () => {
    const { sendEmail, status } = useEmails();

    return (
        <>
            <Content>
                <div>
                    <div>{'Hello'}</div>
                    <h1>{'Heading One'}</h1>
                    <h2>{'Heading Two'}</h2>
                    <h3>{'Heading Three'}</h3>
                    <p>{'Paragrahs will use this styling'}</p>
                </div>
            </Content>
            {/*<Content>
                <div>
                    <div>{'August 29, 2026'}</div>
                    <Button label='Test email' onClick={() => sendEmail({rsvpId: '12345', rsvp: [
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
                        ]})}/>
                    <div>{status}</div>
                </div>
            </Content>*/}
            <Content>
                <div className={styles.contentTwoColumn}>
                    <div className={styles.contentColumn}>
                        <p>Timeline details</p>
                    </div>
                    <div className={styles.contentColumn}>
                        <div className={styles.mapContainer}>
                            <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Listowel%20golf%20club)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
}