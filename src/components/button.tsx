import { CSSProperties } from 'react';
import styles from '../wedding.module.css';

interface IButtonProps {
    label: string;
    onClick: () => void;
    inlineStyle: CSSProperties;
}

export const Button = ({ label, onClick, inlineStyle }: IButtonProps) => {
    return (
        <button style={inlineStyle} className={styles.buttonStyle} onClick={onClick} aria-label={label} tabIndex={0}>{label}</button>
    );
}