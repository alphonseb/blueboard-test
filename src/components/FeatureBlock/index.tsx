import React from 'react';
import './style.scss';

export interface Feature {
    id: number,
    title: string,
    body: string,
    imgUrl: string
}

type Props = {
    feature: Feature
};

const cap = (_string: string): string => {    
    return `${_string[0].toUpperCase()}${_string.substring(1)}`;
};

function FeatureBlock ({ feature }: Props) {
    return (
        <div className="feature-block">
            <img src={ feature.imgUrl } alt={ feature.title } className="feature-block__img"/>
            <h3 className="feature-block__title">
                { cap(feature.title) }
            </h3>
            <p className="feature-block__description">
                { feature.body }
            </p>
        </div>
    );
}

export default FeatureBlock;