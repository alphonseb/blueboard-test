import React from 'react';
import './style.scss';

type Props = {
    title: string,
    description: string,
    imgUrl: string
};

function FeatureBlock ({ title, description, imgUrl }: Props) {
    return (
        <div className="feature-block">
            <img src={ imgUrl } alt={ title } className="feature-block__img"/>
            <h3 className="feature-block__title">
                { title }
            </h3>
            <p className="feature-block__description">
                { description }
            </p>
        </div>
    );
}

export default FeatureBlock;