import { ButtonType } from '../types';
import styles from '../wedding.module.css';
import { IconType, } from 'react-icons';

interface IButtonProps {
    label: string;
    type: ButtonType;
    onClick: () => {};
    icon: IconType | null;
}

export const Button = ({ type, onClick }: IButtonProps) => {

    return (
        <>
        </>
    );
}