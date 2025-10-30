import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import DiagramCard from './DiagramCard';
import { diagrams } from '../data/diagrams';

const DiagramGallery: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = diagrams.map((diagram) => ({
        src: diagram.imageUrl,
        alt: diagram.title,
        title: diagram.title,
        description: diagram.description,
    }));

    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="gallery-container">
            <header className="gallery-header">
                <h1>AWS Architecture Diagrams</h1>
            </header>

            <div className="gallery-grid">
                {diagrams.map((diagram, index) => (
                    <DiagramCard
                        key={diagram.id}
                        diagram={diagram}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                index={currentIndex}
                plugins={[Zoom]}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                    scrollToZoom: true,
                }}
            />
        </div>
    );
};

export default DiagramGallery;
