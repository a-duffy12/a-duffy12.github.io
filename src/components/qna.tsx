import styles from '../wedding.module.css';

interface IQnAProps {
    question: string;
    answer: string;
}

export const QnA = ({ question, answer }: IQnAProps) => {
    return (
        <>
            <p className={`${styles.contentText} ${styles.contentTextEmphasis}`}>
                {question}
            </p>
            <p className={`${styles.contentText} ${styles.contentBreak}`}>
                {answer}
            </p>
        </>
    );
}