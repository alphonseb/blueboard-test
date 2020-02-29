import React, { useState, RefObject, useEffect, ChangeEvent, FormEvent } from 'react';

import './style.scss';
import poster from '../../assets/background-header.jpg';
import homeSecond from '../../assets/home-second.jpg';
import macbook from '../../assets/macbook.png';

import SectionTitle from '../../components/SectionTitle/index';
import CtaButton from '../../components/CtaButton/index';
import TextBlock from '../../components/TextBlock/index';
import FormField from '../../components/FormField/index';
import PageTitle from '../../components/PageTitle/index';
import FlexContainer from '../../components/FlexContainer/index';
import FeatureBlock, { Feature } from '../../components/FeatureBlock/index';

import feature1Url from '../../assets/feature1.png';
import feature2Url from '../../assets/feature2.png';
import feature3Url from '../../assets/feature3.png';

const featureUrls: string[] = [feature1Url, feature2Url, feature3Url];

interface ApiResult {
    userId: number,
    id: number,
    title: string,
    body: string
};

interface FormData {
    name: string,
    email: string,
    password: string,
    [key: string]: string;
}

function Home() {
    /**
     * Features
     */
    const [features, setFeatures] = useState<Feature[]>([]);
    
    const getFeatures = async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data: ApiResult[] = await result.json();
            const features: Feature[] = await data.slice(0, 3).map(({ id, title, body }: ApiResult, index: number) => ({
                id,
                title,
                body,
                imgUrl: featureUrls[index]
            }));
            await setFeatures(features);
        } catch (error) {
            throw new Error(error);
        }
    }
    
    useEffect(() => {
        getFeatures();
    }, []);
    
    /**
     * Video
     */
    const videoRef: RefObject<HTMLVideoElement> = React.createRef();

    const startVideo = ():void => {
        videoRef.current?.play()
    };
    
    /**
     * Form
     */
    const [formResult, setFormResult] = useState<FormData>({ name: '', email: '', password: '' });
    const [formErrors, setFormErrors] = useState<FormData>({ name: '', email: '', password: '' })

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setFormResult((state: FormData): FormData => ({ ...state, [name]: value}))
    }
    
    const submitForm = async () => {
        const request: Request = new Request(
            'https://httpbin.org/post',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(formResult)
            }
        );
        try {
            const result = await fetch(request);
            const data = await result.json();
            if (data.data) {
                window.alert('You are subsribed !');
                setFormResult({ name: '', email: '', password: '' });
            } else {
                window.alert('Error processing your demand !');
            }
        } catch (error) {
            window.alert(`Error processing your demand : ${error}`);
        }
    }
    
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        Object.keys(formResult).forEach((key: string) => {
            console.log(!formResult[key]);
            if (!formResult[key]) {
                setFormErrors((state: FormData): FormData => ({ ...state, [key]: `Please fill in your ${key}` }));
            } else {
                setFormErrors((state: FormData): FormData => ({ ...state, [key]: '' }));
            }
        })
        if (Object.values(formResult).every(value => value)) {
            submitForm();
        }
    }

    return (
        <main className="home">
            <section className="home__first">
                <video ref={ videoRef } src="https://storage.coverr.co/videos/Stunning%20Mountains?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgyOTAxMzIxfQ.gHi8oo7_Fk6hFY2IZIVQqo7gU4anZ5w8RSzuN0RI1AQ" className="home__video" poster={ poster }></video>
                <div className="home__first-content">
                    <PageTitle text="You will need no other platform" />
                    <button className="home__play-button" onClick={ startVideo }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 59" width="59" height="59">
                            <defs>
                                <style>
                                    { `.cls-1 {
                                        opacity: 0.6;
                                    }
                                    .cls-2 {
                                        fill: #323969;
                                    }
                                    .cls-3 {
                                        fill: #f4f5f7;
                                    }` }
                                </style>
                            </defs>
                            <g id="Play_Video_Icon" data-name="Play Video Icon" className="cls-1" transform="translate(-691 -406)">
                                <circle id="Ellipse_2" data-name="Ellipse 2" className="cls-2" cx="29.5" cy="29.5" r="29.5" transform="translate(691 406)" />
                                <path id="Polygon_1" data-name="Polygon 1" className="cls-3" d="M731,435.5,714,445V426Z" />
                            </g>
                        </svg>
                    </button>
                    <CtaButton text="Try it now" />
                    <p className="home__disclaimer">* No need to add card details</p>
                </div>
            </section>
            <section className="home__second">
                <FlexContainer>
                    <div className="home__second-content">
                        <SectionTitle text="There is no other platform for you" hasEllipsis overTitle="New design" />
                        <TextBlock text="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper." />
                        <TextBlock text="Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue." />
                    </div>
                    <div className="home__second-image">
                        <img src={ homeSecond } alt=""/>
                    </div>
                </FlexContainer>
            </section>
            <section className="home__third">
                <div className="home__third-title">
                    <SectionTitle text="Some awesome features" overTitle="New Features" />
                </div>
                <FlexContainer justify="center">
                    { features.map(feature => (
                        <FeatureBlock key={ feature.id } feature={ feature } />
                    ))}
                </FlexContainer>
            </section>
            <section className="home__fourth">
                <FlexContainer reverse>
                    <div className="home__fourth-content">
                        <SectionTitle text="Responsive Design, just need your tap" hasEllipsis overTitle="new design" />
                        <TextBlock text="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Etiasem malesuada magn. Vestibulum felis euismod semper." />
                    </div>
                    <div className="home__fourth-image">
                        <img src={ macbook } alt=""/>
                    </div>
                </FlexContainer>
            </section>
            <section className="home__contact">
                <div className="home__contact-title">
                    <SectionTitle text="Over 1000 designers are using" hasEllipsis overTitle="contact us" />
                </div>
                <form action="#" method="post" onSubmit={ handleFormSubmit }>
                    <FlexContainer justify="space-between" align="end">
                        <FormField required error={ formErrors.name } label="full name" name="name" value={ formResult.name } onChange={ handleFormChange }/>
                        <FormField required error={ formErrors.email } label="your email" name="email" type="email" value={ formResult.email } onChange={ handleFormChange }/>
                        <FormField required error={ formErrors.password } label="password" name="password" type="password" value={ formResult.password } onChange={ handleFormChange }/>
                        <CtaButton text="try now" hasShadow />
                    </FlexContainer>
                </form>
                <p className="home__contact-disclaimer">
                    By signing up you agree to our <a href="/cgu">terms & Services</a>.
                </p>
            </section>
        </main>
    );
};

export default Home;