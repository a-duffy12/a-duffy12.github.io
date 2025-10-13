import { Content } from '../content';
import styles from '../../wedding.module.css';

export const TransportationTab = () => {
    return (
        <Content>
            <h3>
                {'Transporation Details to Come'}
            </h3>
            <p className={styles.contextText}>
                {'Buses will be available to shuttle guests between the Listowel Golf Club, the Listowel Country Inn, and Wingham.'}
            </p>
            <p className={styles.contextText}>
                {'The exact timing and stop locations will be posted at a later date.'}
            </p>
        </Content>
    );
}