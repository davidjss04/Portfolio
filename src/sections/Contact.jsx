import React from 'react';
import { SectionContainer } from '../containers';
import { MessageBox } from '../components';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <SectionContainer id='contact' title={t('menu_contact')} maxWidth="sm" reverse>
            <MessageBox />
        </SectionContainer>
    );
};

export default Contact;
