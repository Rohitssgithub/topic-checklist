import React, { useState } from 'react';
import axios from 'axios';
import { ProgressBar, Button } from 'react-bootstrap';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/api/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const progressPercentage = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(progressPercentage);
                },
            });

            console.log('File uploaded successfully:', response.data);
            setFile(null);
            setProgress(0);
        } catch (error) {
            console.error('Error uploading file:', error.message);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <Button variant="primary" onClick={handleUpload}>
                Upload
            </Button>
            {progress > 0 && (
                <ProgressBar
                    now={progress}
                    label={`${progress}%`}
                    animated={progress < 100}
                />
            )}
        </div>
    );
};

export default FileUpload;
