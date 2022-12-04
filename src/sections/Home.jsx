import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { HomeContainer } from '../containers';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const { t } = useTranslation();

    const one = (
        <Typography color='primary' variant='h3'>
            {t('home_welcome')}
        </Typography>
    );
    const two = (
        <Typography
            custom={0}
            color='text'
            variant='h1'
            sx={{
                magin: '0',
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: '1000',
                lineHeight: '1.2',
            }}
        >
            {' '}
            <Typewriter
                options={{
                    strings: t('home_my_jobs').split(','),
                    autoStart: true,
                    delay: 'natural',
                    pauseFor: 4000,
                    loop: true,
                }}
            />
        </Typography>
    );
    const three = (
        <Typography
            custom={2}
            variant='h2'
            color='text.secondary'
            sx={{
                magin: '0',
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontWeight: '1000',
            }}
        >
            {t('home_what_i_do')}
        </Typography>
    );

    const five = (
        <Button
            variant='outlined'
            color='primary'
            size='large'
            sx={{ marginTop: '3rem' }}
        >
            <Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to='contact'
            >
                {t('home_btn_contact')}
            </Link>
        </Button>
    );

    const items = [one, two, three, five];

    return (
        <HomeContainer id='home'>
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </HomeContainer>
    );
};

export default Home;
