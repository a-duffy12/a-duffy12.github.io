import styles from '../wedding.module.css';

interface IScheduleItemProps {
    item: string;
    time: string;
    timeNote: string;
}

export const ScheduleItem = ({ item, time, timeNote }: IScheduleItemProps) => {
    return (
        <>
            <p className={`${styles.contentText} ${styles.contentTextEmphasis}`}>
                {item}
            </p>
            <p className={styles.contentText}>
                {time}
            </p>
            {timeNote && timeNote.length && <p className={`${styles.contentText} ${styles.contentTextNote}`}>
                {timeNote}
            </p>}
            <br/>
        </>
    );
}