import { Content } from '../content';
import styles from '../../wedding.module.css';
import { useMobile } from '../../hooks/useMobile';
import { Button } from '../button';

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
                <div className={styles.contentTwoColumn}>
                    <div className={styles.contentColumn}>
                        <h3>Listowel Country Inn</h3>
                        <p>Located five minutes away from the venue. The room types are: basic (two double beds), deluxe (two double beds), and king (one king bed). Book under 'Brooklyn and Aiden' to be grouped near other guests.</p>
                        <p>This motel does have another wedding the same weekend. Booking early is encouraged. No rooms are reserved.</p>
                        <Button label={'Visit Site'} onClick={openListowelCountryInnPage}></Button>
                    </div>
                    <div className={styles.contentColumn}>
                        <div className={styles.mapContainer}>
                            <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Listowel%20Country%20Inn)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                        </div>
                    </div>
                </div>
            </Content>
            <Content>
                <div className={styles.contentTwoColumn}>
                    <div className={styles.contentColumn}>
                        <h3>Wingham Motel</h3>
                        <p>Located just outside Wingham, 30 minutes from the venue. Rooms have two double beds or one queen bed.</p>
                        <Button label={'Visit Site'} onClick={openWinghamModelPage}></Button>
                    </div>
                    <div className={styles.contentColumn}>
                        <div className={styles.mapContainer}>
                            <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Wingham%20Motel)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
}