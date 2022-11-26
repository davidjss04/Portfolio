import React from 'react';
import { SectionContainer } from '../containers';
import { MessageBox } from '../components';

const Contact = () => {
    return (
        <SectionContainer id='contact' title='contact' maxWidth="sm" reverse>
            <MessageBox />
        </SectionContainer>
    );
};

export default Contact;
