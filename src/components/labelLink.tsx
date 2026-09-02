import styles from '../wedding.module.css';

interface ILabelLinkProps {
    title: string;
    label: string;
    link: string;
}

export const LabelLink = ({ title, label, link }: ILabelLinkProps) => {
    return (
        <>
            <p className={`${styles.contentText} ${styles.contentTextEmphasis}`}>
                {title}
            </p>
            <a className={`${styles.contentText} ${styles.contentBreak}`} href={link} target='_blank'>
                {label}
            </a>
        </>
    );
}