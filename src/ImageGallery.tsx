import React, { useEffect, useRef } from "react";
import './ImageGallery.css';

const ImageGallery = ({ images }: { images: string[] }) => {
    
    const scrollableContentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scrollableContent = scrollableContentRef.current;
        if (scrollableContent) {
            // Check if there is overflow
            const hasOverflow = scrollableContent.scrollWidth > scrollableContent.clientWidth;
            // Conditionally apply justify-content property
            scrollableContent.style.justifyContent = hasOverflow ? 'flex-start' : 'center';
        }
    }, [images]);

    return (
        <div className="scrollable-container">
            <div ref={scrollableContentRef} className="scrollable-content">
                {
                    images.map((src, index) => (
                        <img key={index} src={src} alt={`Asset ${index}`} />
                    ))
                }
            </div>
        </div>
    );
};

export default ImageGallery;
