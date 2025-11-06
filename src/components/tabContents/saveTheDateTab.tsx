import { useEmails } from '../../hooks/useEmails';
import { Drink, Meat, Rsvp, Transportation } from '../../types';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { Button } from '../button';
import { useEffect, useMemo, useState } from 'react';
import { weddingDate } from '../../constants';
import saveTheDateImage from '../../assets/images/save_the_date.png';
import { ContentVariableWidth } from '../contentVariableWidth';
import { Bar } from '../bar';
import { QnA } from '../qna';

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

    const formatTimeElements = (time: number) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return {
            seconds,
            minutes,
            hours,
            days
        };
    }

    const {seconds, minutes, hours, days} = formatTimeElements(countdownTime);

    const zeroPad = (num: number) => {
        const numString = String(num);

        if (numString.length >= 2) {
            return numString;
        }

        return numString.padStart(2, '0');
    }

    const stackCountdown = useMemo(() => window.innerWidth < 650, [window.innerWidth]);

    return (
        <>
            <ContentVariableWidth>
                {showCountdown ?
                    (stackCountdown ?
                        <div className={styles.countdownStacked}>
                            <div className={styles.countdownContainer}>
                                <div className={styles.countdownBox}>
                                    <h1>
                                        {zeroPad(days)}
                                    </h1>
                                    <p>
                                        {'Days'}
                                    </p>
                                </div>
                                <div className={styles.countdownBox}>
                                    <h1>
                                        {zeroPad(hours)}
                                    </h1>
                                    <p>
                                        {'Hours'}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.countdownContainer}>
                                <div className={styles.countdownBox}>
                                    <h1>
                                        {zeroPad(minutes)}
                                    </h1>
                                    <p>
                                        {'Minutes'}
                                    </p>
                                </div>
                                <div className={styles.countdownBox}>
                                    <h1>
                                        {zeroPad(seconds)}
                                    </h1>
                                    <p>
                                        {'Seconds'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        : <div className={styles.countdownContainer}>
                            <div className={styles.countdownBox}>
                                <h1>
                                    {zeroPad(days)}
                                </h1>
                                <p>
                                    {'Days'}
                                </p>
                            </div>
                            <div className={styles.countdownBox}>
                                <h1>
                                    {zeroPad(hours)}
                                </h1>
                                <p>
                                    {'Hours'}
                                </p>
                            </div>
                            <div className={styles.countdownBox}>
                                <h1>
                                    {zeroPad(minutes)}
                                </h1>
                                <p>
                                    {'Minutes'}
                                </p>
                            </div>
                            <div className={styles.countdownBox}>
                                <h1>
                                    {zeroPad(seconds)}
                                </h1>
                                <p>
                                    {'Seconds'}
                                </p>
                            </div>
                        </div>
                    )
                    : <div>
                        <h2>{'Congratulations Brooklyn and Aiden!'}</h2>
                    </div>
                }                
            </ContentVariableWidth>
            <Content>
                <img 
                    className={styles.contentImage}
                    src={saveTheDateImage}
                    alt={'Aiden Duffy and Brooklyn Wright. Save the date: Saturday, August 29, 2026.'}
                />
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
                <h3 className={styles.contentText}>
                    {'Schedule of Events'}
                </h3>
                <Bar/>
                <QnA 
                    question={'Ceremony'}
                    answer={'4:00 PM'}
                />
                <QnA 
                    question={'Cocktail Hour'}
                    answer={'4:30 PM'}
                />
                <QnA 
                    question={'Dinner (doors open)'}
                    answer={'6:00 PM'}
                />
                <QnA 
                    question={'Reception'}
                    answer={'8:00 PM'}
                />
                <QnA 
                    question={'Late-Night Snack'}
                    answer={'10:30 PM'}
                />
                <div className={styles.mapContainer}>
                    <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Listowel%20golf%20club)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                </div>
            </Content>
        </>
    );
}