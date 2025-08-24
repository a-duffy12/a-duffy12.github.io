import styles from '../wedding.module.css';

interface IButtonProps {
    label: string;
    onClick: () => {};
}

export const Button = ({ label, type, onClick }: IButtonProps) => {
    return (
        <button className={styles.buttonStyle} onClick={onClick} aria-label={label}>{label}</button>
    );
}