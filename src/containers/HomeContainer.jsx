import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

const HomeContainer = ({ children, ...rest }) => {
    return <ContainerStyles {...rest}>{children}</ContainerStyles>;
};

const ContainerStyles = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: `calc(${theme.spacing(4)} + ${theme.navbarHeight}) `,
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.navbarHeight,
    },

    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

export default HomeContainer;
