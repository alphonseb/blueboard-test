import React from 'react';
import './style.scss';

type Props = {
    text: string
};

function PageTitle ({ text }: Props) {
    return (
        <h1 className="page-title">{ text }</h1>
    );
}

export default PageTitle;