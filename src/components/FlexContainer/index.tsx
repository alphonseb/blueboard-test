import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
    children: ReactNode,
    reverse?: boolean,
    justify?: string,
    align?: string,
};

function FlexContainer ({ children, reverse, justify, align }: Props) {
    return (
        <div className={ `flex-container ${reverse ? 'flex-container--reverse' : ''} ${justify ? `flex-container--justify-${justify}` : ''} ${align ? `flex-container--align-${align}` : '' }` }>
            { children }
        </div>
    );
}

export default FlexContainer;