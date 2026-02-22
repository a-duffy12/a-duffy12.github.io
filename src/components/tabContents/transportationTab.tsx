import { Content } from '../content';
import styles from '../../wedding.module.css';
import { Bar } from '../bar';

export const TransportationTab = () => {
    return (
        <Content>
            <h3 className={styles.contentText}>
                {'Transporation'}
            </h3>
            <Bar/>
            <p className={styles.contentText}>
                {'Buses will be available to shuttle guests between the Listowel Golf Club, the Listowel Country Inn, and Wingham.'}
            </p>
            <p className={styles.contentText}>
                {'The shuttle will run once from Wingham and the Listowel Country Inn to the venue to bring ceremony guests.'}
            </p>
            <p className={styles.contentText}>
                {'The shuttle will run once again from Wingham and the Listowel Country Inn to the venue to bring reception guests.'}
            </p>
            <p className={styles.contentText}>
                {'During the reception, the shuttle will make several return runs to the Listowel Country Inn and two return runs to Wingham.'}
            </p>
            <p className={styles.contentText}>
                {'The exact timing and stop locations will be posted at a later date.'}
            </p>
            <Bar/>
            <p className={styles.contentText}>
                {'If you have questions about transportation or would like to discuss adding an additional stop along the route, please contact us by June 1st.'}
            </p>
        </Content>
    );
}