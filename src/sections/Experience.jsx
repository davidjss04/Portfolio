import React from 'react';
import { SectionContainer } from '../containers';
import { Tabs } from '../components';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer id='experience' title={t('menu_experience')} maxWidth="sm" padding="120" reverse>
            <Tabs />
        </SectionContainer>
    );
};

export default Experience;
