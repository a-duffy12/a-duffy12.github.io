import styles from '../wedding.module.css';

interface IButtonProps {
    label: string;
    onClick: () => void;
}

export const Button = ({ label, onClick }: IButtonProps) => {
    return (
        <button className={styles.buttonStyle} onClick={onClick} aria-label={label} tabIndex={0}>{label}</button>
    );
}