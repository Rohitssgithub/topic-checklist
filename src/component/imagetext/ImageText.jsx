import React, { useRef } from 'react';
import Tesseract from 'tesseract.js';

const ImageTextExtractor = () => {
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const { data: { text } } = await Tesseract.recognize(
                file,
                'eng',
                { logger: info => console.log(info) }
            );

            console.log('Extracted text:', text);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
            />
        </div>
    );
};

export default ImageTextExtractor;
