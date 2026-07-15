import { Content } from '../content';
import styles from '../../wedding.module.css';
import { useEffect, useRef, useState } from 'react';
import { galleryImages } from '../../constants';

export const GalleryTab = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPLaying, setIsPlaying] = useState(true);

    // const autoPlayRef

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const handleSelect = (index: number) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const swipeThreshold = 50; // Minimum drag distance in pixels

        if (distance > swipeThreshold) {
            handleNext();
        } else if (distance < -swipeThreshold) {
            handlePrev();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);
    
    return (
        <>
            <Content>
                <h3 className={styles.contentText}>
                    {'Gallery'}
                </h3>
                <div 
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                        >
                            <img
                                src={image.url}
                                alt={image.caption}
                            />
                            <div>
                                <p>
                                    {image.caption}
                                </p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </Content>
        </>
    );
}