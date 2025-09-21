import { useMemo } from 'react';
import { useConfig } from '../contexts/configContext';
import styles from '../wedding.module.css';
import { IconType, } from 'react-icons';

interface TabButtonProps {
    label: string;
    active: boolean;
    icon: IconType | null;
    onClick: () => void;
    isFirst: boolean;
}

export const TabButton = ({ label, active, icon: Icon, onClick, isFirst }: TabButtonProps) => {
    const { isMobile } = useConfig();

    const color = useMemo(() => active ? '#e4e0e0': '#1d2b17', [active]);

    return (
        <div className={`${styles.tabButton} ${active ? styles.tabButtonActive : ''} ${isFirst ? styles.tabButtonFirst : ''}`} onClick={onClick} role='button' aria-label={label} tabIndex={0}>
            <div className={styles.tabButtonIcon}>
                {Icon && <Icon size={24} color={color}/>}
            </div>
            {!isMobile && 
            <div className={styles.tabButtonLabel}>
                {label}
            </div>}
        </div>
    )
}