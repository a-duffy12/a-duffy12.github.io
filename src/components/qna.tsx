import styles from '../wedding.module.css';

interface IQnAProps {
    question: string;
    answer: string;
}

export const QnA = ({ question, answer }: IQnAProps) => {
    return (
        <>
            <b>
                <i className={styles.contentText}>
                    {question}
                </i>
            </b>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {answer}
            </p>
        </>
    );
}