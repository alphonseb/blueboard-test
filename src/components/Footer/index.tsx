import React, { useState, ChangeEvent, FormEvent } from 'react';
import FlexContainer from '../FlexContainer/index';
import FormField from '../FormField/index';

import './style.scss';
import logo from '../../assets/logo.svg';
import mailIcon from '../../assets/icon-mail.png';

function Footer() {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value);
    };
    
    const subscribeToNewsletter = async () => {
        const request: Request = new Request(
            'https://httpbin.org/post',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({ email })
            }
        );
        try {
            const result = await fetch(request);
            const data = await result.json();
            if (data.data) {
                window.alert('You are subsribed to the newsletter !');
                setEmail('');
            } else {
                window.alert('Error processing your demand !');
            }
        } catch (error) {
            window.alert(`Error processing your demand : ${error}`);
        }
    };
    
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
            subscribeToNewsletter();
        }
    };
    
    return (
        <footer className="footer">
            <FlexContainer>
                <div className="footer__infos">
                    <img src={ logo } alt="Logo" className="footer__logo" />
                    <p>Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.</p>
                    <p>USA & CAN: 1-888-123-4567</p>
                    <p>Address: 34 Brokel Rd. NY</p>
                </div>
                <div className="footer__links">
                    <h4 className="footer__block-title">Support</h4>
                    <ul>
                        <li>
                            <a href="/">Help Center</a>
                        </li>
                        <li>
                            <a href="/">Get Started</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__links">
                    <h4 className="footer__block-title">About us</h4>
                    <ul>
                        <li>
                            <a href="/">About us</a>
                        </li>
                        <li>
                            <a href="/">Terms of use</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__newsletter">
                    <h4 className="footer__block-title">Get Newsletter</h4>
                    <form className="footer__newsletter-form" action="#" method="POST" onSubmit={ handleFormSubmit }>
                        <FormField type="email" required label="email" name="email-newsletter" value={ email } onChange={ handleEmailChange } error={ emailError ? 'Please fill in your email' : '' } />
                        <button className="footer__send-newsletter">
                            <img src={ mailIcon } alt=""/>
                        </button>
                    </form>
                </div>
            </FlexContainer>
        </footer>
    );
}

export default Footer;