import { Content } from '../content';
import styles from '../../wedding.module.css';
import { useMobile } from '../../hooks/useMobile';

export const AccomodationsTab = () => {
    const visitListowelLink = 'https://listowelcountryinn.com/visiting-listowel-country-inn/';

    return (
        <Content>
            <div className={styles.contentTwoColumn}>
                <div className={styles.contentColumn}>
                    <a href={visitListowelLink}>Listowel Tourism</a>
                </div>
                <div className={styles.contentColumn}>
                    <div className={styles.mapContainer}>
                        <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Listowel%20Country%20Inn)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                    </div>
                </div>
            </div>
        </Content>
    )
}