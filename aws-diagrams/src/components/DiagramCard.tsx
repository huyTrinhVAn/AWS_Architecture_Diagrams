import React from 'react';
import type { Diagram } from '../data/diagrams';

interface DiagramCardProps {
    diagram: Diagram;
    onClick: () => void;
}

const DiagramCard: React.FC<DiagramCardProps> = ({ diagram, onClick }) => {
    return (
        <div className="diagram-card" onClick={onClick}>
            <div className="image-container">
                <img
                    src={diagram.imageUrl}
                    alt={diagram.title}
                    loading="lazy"
                />
            </div>
            <div className="card-content">
                <h3>{diagram.title}</h3>
                <p>{diagram.description}</p>
            </div>
        </div>
    );
};

export default DiagramCard;
