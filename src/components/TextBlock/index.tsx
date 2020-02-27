import React from 'react';
import './style.scss';

type Props = {
    text: string
};

function TextBlock ({ text }: Props) {
    return (
        <p className="text-block">
            { text }
        </p>
    );
}

export default TextBlock;