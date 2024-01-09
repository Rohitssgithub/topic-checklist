import React, { useRef } from 'react';

const InputField = () => {
    const textareaRef = useRef();

    const handlePaste = (event) => {
        event.preventDefault();
        const pastedText = event.clipboardData.getData('text');
        const lines = pastedText.split('\n');

        const commonIndent = lines.reduce((minIndent, line) => {
            const leadingWhitespace = line.match(/^\s*/)[0];
            return Math.min(minIndent, leadingWhitespace.length);
        }, Infinity);

        const formattedText = lines.map((line) => line.slice(commonIndent)).join('\n');

        textareaRef.current.value = formattedText;
    };

    return (
        <>
            <textarea
                ref={textareaRef}
                onPaste={handlePaste}
                cols="30"
                rows="10"
                placeholder="Paste multiline code here..."
            ></textarea>
            <input type="search" />
            <button>click</button>
        </>
    );
};

export default InputField;
