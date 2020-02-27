import React from 'react';
import './style.scss'

type Props = {
    text: string,
    overTitle?: string,
    hasEllipsis?: boolean
};

function SectionTitle ({ text, overTitle = '', hasEllipsis = false}: Props) {
    return (
        <div className="section-title">
            { overTitle && (<span className="section-title__over">{ overTitle }</span>) }
            <h2 className="section-title__main">
                { text }
                { hasEllipsis && (<span className="section-title__ellipsis">&nbsp;....</span>)}
            </h2>
        </div>
    )
};

export default SectionTitle;