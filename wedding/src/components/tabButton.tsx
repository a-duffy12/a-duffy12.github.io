import { useConfig } from '../contexts/configContext';
import styles from '../wedding.module.css';

interface TabButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

export const TabButton = ({ label, active, onClick }: TabButtonProps) => {
    const { isMobile } = useConfig();

    return (
        <div className={`${styles.tabButton} ${active ? styles.tabButtonActive : ''}`} onClick={onClick}>
            <div className={styles.tabButtonIcon}></div>
            {!isMobile && 
            <div className={styles.tabButtonLabel}>
                {label}
            </div>}
        </div>
    )
}