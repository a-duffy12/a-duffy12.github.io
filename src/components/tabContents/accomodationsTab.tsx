import { Content } from '../content';
import styles from '../../wedding.module.css';
import { useMobile } from '../../hooks/useMobile';
import { Button } from '../button';
import { Bar } from '../bar';

export const AccomodationsTab = () => {
    const openListowelCountryInnPage = () => {
        window.open('https://listowelcountryinn.com/', '_blank');
    };

    const openWinghamModelPage = () => {
        window.open('https://wlmotel.com/', '_blank');
    };

    return (
        <>
            <Content>
                <h3 className={styles.contentText}>
                    {'Listowel Country Inn'}
                </h3>
                <Bar/>
                <p className={styles.contentText}>
                    {'Located a five minute drive away from the venue. Book under \'Brooklyn and Aiden\' to be grouped near other guests.'}
                </p>
                <p className={styles.contentText}>
                    {'This motel does have another wedding the same weekend. Booking early is encouraged. No rooms are reserved.'}
                </p>
                <Button label={'Visit Site'} onClick={openListowelCountryInnPage}/>
                <div className={styles.mapContainer}>
                    <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Listowel%20Country%20Inn)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                </div>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Wingham Motel'}
                </h3>
                <Bar/>
                <p className={styles.contentText}>
                    {'Located just outside Wingham, a 30 minute drive from the venue.'}
                </p>
                <p className={styles.contentText}>
                    {'We do not have a hotel block and no rooms are reserved. Transportation to and from this location will be available.'}
                </p>
                <Button label={'Visit Site'} onClick={openWinghamModelPage}/>
                <div className={styles.mapContainer}>
                    <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Wingham%20Motel)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                </div>
            </Content>
        </>
    );
}