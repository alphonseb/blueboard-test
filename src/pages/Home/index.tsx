import React from 'react';
import SectionTitle from '../../components/SectionTitle/index'
import CtaButton from '../../components/CtaButton/index'
import TextBlock from '../../components/TextBlock/index'
import FormField from '../../components/FormField/index'

function Home () {
    return (
        <main>
            <h1>Home</h1>
            <SectionTitle text={"My text"} />
            <SectionTitle text={"My text with ellipsis"} hasEllipsis />
            <SectionTitle text="My text with ellipsis" hasEllipsis overTitle="Over title" />
            <CtaButton text="Try now" hasShadow />
            <TextBlock text="lorem ipsumoreriljsqflgdjgkhsfgdih  hdslkgrjshed hrldk" />
            <TextBlock text="lorem ipsumoreriljsqflgdjgkhsfgdih  hdslkgrjshed hrldk" />
            <FormField name="first_name" label="First name" />
            <FormField name="email" label="Email" type="email" error="Please fill this form" />
        </main>
    );
};

export default Home;