import React, { ChangeEvent } from 'react';
import './style.scss';

type Props = {
    name: string,
    label: string,
    type?: string,
    error?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    required?: boolean
};

function Formfield({ name, label, error = '', type = 'text', onChange, value, required = false }: Props) {
    return (
        <div className="form-field">
            <label className="form-field__label-container" htmlFor={ name }>
                <input className={`form-field__input ${ value ? 'form-field__input--has-value' : '' }`} required={ required } type={ type } name={ name } id={ name } value={ value } onChange={ onChange } />
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