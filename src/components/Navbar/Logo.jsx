import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-scroll';

const Logo = () => {
    return (
        <Typography
            component={Link}
            variant='h5'
            align='center'
            fontFamily='-Calibre'
            sx={stylesLogo}
            to='home'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >
            {'<DJSS/>'}
        </Typography>
    );
};

const stylesLogo = {
    textDecoration: 'none',
    color: 'primary.main',
    fontWeight: '400',
    fontSize: 'clamp(1.5rem, 2vw, 2rem)',
    '&:hover': {
        cursor: 'pointer',
    },
};

export default Logo;
