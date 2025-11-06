import { Bar } from '../bar';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { Button } from '../button';

export const FaqTab = () => {
    return (
        <Content>
            <h3 className={styles.contentText}>
                {'Frequently Asked Questions'}
            </h3>
            <Bar/>
            <b>
                <i className={styles.contentText}>
                    {'What is the dress code?'}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {'Formal.'}
            </p>
            <b>
                <i className={styles.contentText}>
                    {'Will the wedding be indoors or outdoors?'}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {'The ceremony will be outdoors. Cocktail hour is split between an indoor space and an outdoor patio. Dinner and reception are indoors, with the outdoor patio remaining open. In the event of rain, the ceremony will be held indoors.'}
            </p>
            <b>
                <i className={styles.contentText}>
                    {'What if I have dietary restrictions?'}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {'You will be able to make your meal selection on RRSVP. Vegan and vegetarian options will be available.'}
            </p>
            <b>
                <i className={styles.contentText}>
                    {'Can I bring a plus one?'}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {'Invitations will explictly list all invited guests and plus ones.'}
            </p>
            <b>
                <i className={styles.contentText}>
                    {'Is everything at the same location?'}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {'Yes. The ceremony, cocktail hour, dinner, and reception are all at the Listowel Golf Club.'}
            </p>
            <b>
                <i className={styles.contentText}>
                    {'Is there parking at the venue?'}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {'There is parking. Guests can also leave vehicles parked overnight.'}
            </p>
            <b>
                <i className={styles.contentText}>
                    {'I have a question not covered here, how can I ask it?'}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {'Email us at brooklynaiden2026@gmail.com'}
            </p>
        </Content>
    );
}