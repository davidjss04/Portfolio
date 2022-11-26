import React from 'react';
import { SectionContainer } from '../containers';
import { Tabs } from '../components';

const Experience = () => {
    return (
        <SectionContainer id='experience' title='Experience' maxWidth="sm" padding="120" reverse>
            <Tabs />
        </SectionContainer>
    );
};

export default Experience;
