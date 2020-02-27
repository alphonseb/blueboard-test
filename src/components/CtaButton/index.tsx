import React from 'react';
import './style.scss';

type Props = {
    text: string,
    hasShadow?: boolean
};

function CtaButton ({ text, hasShadow = false }: Props) {
    return (
        <button className={ `cta-button ${hasShadow ? 'cta-button--shadow' : ''}` }>
            { text }
        </button>
    );
};

export default CtaButton;