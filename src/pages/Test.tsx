
import React, { useState } from 'react';

const Test: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const reverseString = (str: string): string => {
        const arr = str.split('');
        const letters = arr.filter(char => /[a-zA-Z]/.test(char));
        let reversed = '';

        arr.forEach(char => {
            if (/[a-zA-Z]/.test(char)) {
                reversed += letters.pop();
            } else {
                reversed += char;
            }
        });

        return reversed;
    };

    const handleReverse = () => {
        setOutput(reverseString(input));
    };

    return (
        <div>
            <h2>Reverse String with Special Characters</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter string"
            />
            <button onClick={handleReverse}>Reverse</button>
            <p>Output: {output}</p>
        </div>
    );
};

export default Test;
