import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const TextToImageConverter = () => {
    const textRef = useRef(null);

    const convertToImage = () => {
        const textElement = textRef.current;
        console.log(textElement)

        if (textElement) {
            html2canvas(textElement)
                .then((canvas) => {
                    const imageDataUrl = canvas.toDataURL('image/png');
                    console.log('imageDataUrl', imageDataUrl)
                    const imgElement = new Image();
                    imgElement.src = imageDataUrl;
                    document.body.appendChild(imgElement);
                })
                .catch((error) => {
                    console.error('Error converting text to image:', error);
                });
        }
    };

    return (
        <div>
            <div ref={textRef}>
                <p>Hello Text</p>
            </div>
            <button onClick={convertToImage}>Convert to Image</button>
        </div>
    );
};

export default TextToImageConverter;
