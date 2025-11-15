import styles from '../wedding.module.css';

interface IQnAProps {
    question: string;
    answers: string[];
}

export const QnA = ({ question, answers }: IQnAProps) => {
    return (
        <>
            <p className={`${styles.contentText} ${styles.contentTextEmphasis}`}>
                {question}
            </p>
            {answers.map((answer, index) => 
                <p className={index == (answers.length-1) ? `${styles.contentText} ${styles.contentBreak}` : styles.contentText} key={`answer_${index}`}>
                    {answer}
                </p>
            )}
        </>
    );
}