import { useEmails } from '../../hooks/useEmails';
import { Drink, Meat, Rsvp, Transportation } from '../../types';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { Button } from '../button';
import { useEffect, useState } from 'react';
import { weddingDate } from '../../constants';

export const SaveTheDateTab = () => {
    const { sendEmail, status } = useEmails();
    const [ showCountdown, setShowCountdown ] = useState(true);
    const [ countdownTime, setCountdownTime ] = useState(0);

    useEffect(() => {
        if (showCountdown) {
            const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const eventTime = weddingDate.getTime();
            let remainingTime = eventTime - currentTime;

            if (remainingTime <= 0) {
                setShowCountdown(false);
                clearInterval(countdownInterval);
            } else {
                setCountdownTime(remainingTime);
            }
        }, 1000);
        
        return () => clearInterval(countdownInterval);
        }
    }, [ weddingDate, showCountdown, countdownTime ]);

    const formatTime = (time: number) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return (
            <>{`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}</>
        );
    }

    return (
        <>
            <Content>
                <div className={styles.centeredContent}>
                    {showCountdown ?
                        <h1>{formatTime(countdownTime)}</h1>
                        :<h1>{'Congratulations Brooklyn and Aiden!'}</h1>
                    }
                </div>
            </Content>
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