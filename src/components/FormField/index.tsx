import React, { useState, ChangeEvent } from 'react';
import './style.scss';

type Props = {
    name: string,
    label: string,
    type?: string,
    error?: string
};

function Formfield({ name, label, error = '', type = 'text' }: Props) {
    const [value, setValue] = useState('');
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    return (
        <div className="form-field">
            <label className="form-field__label-container" htmlFor={ name }>
                <input className={`form-field__input ${ value ? 'form-field__input--has-value' : '' }`} type={ type } name={ name } id={ name } value={ value } onChange={ handleChange } />
                <span className="form-field__label">
                    { label }
                </span>
            </label>
            { error && (
                <p className="form-field__error">{ error }</p>
            )}
        </div>
    );
}

export default Formfield;