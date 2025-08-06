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

    return (
        <div className={`${styles.tabButton} ${active ? styles.tabButtonActive : ''} ${isFirst ? styles.tabButtonFirst : ''}`} onClick={onClick} role='button' aria-label={label}>
            <div className={styles.tabButtonIcon}>
                {Icon && <Icon size={24} color="#d19600"/>}
            </div>
            {!isMobile && 
            <div className={styles.tabButtonLabel}>
                {label}
            </div>}
        </div>
    )
}