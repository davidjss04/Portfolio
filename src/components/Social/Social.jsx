import React, { useContext } from 'react';
import { LinkedIn, Instagram, Twitter, GitHub } from '@mui/icons-material';
import { Box } from '@mui/material';
import IconBtn from '../IconBtn/IconBtn.jsx';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import loaderContext from '../../contexts/loaderContext';
import { useTheme } from '@mui/system';

const Social = ({ mobile }) => {
    const theme = useTheme();
    const classes = styles(theme);
    const { isLoading } = useContext(loaderContext);

    if (mobile) {
        return (
            <Box sx={classes.mobileWrapper}>
                <IconBtn icon={GitHub} href='https://github.com/davidjss04' />
                <IconBtn
                    icon={LinkedIn}
                    href='https://www.linkedin.com/in/davidjss04/'
                />
                <IconBtn icon={Twitter} href='https://twitter.com/davidjss04' />
                <IconBtn
                    icon={Instagram}
                    href='https://www.instagram.com/davidjss04/'
                />
            </Box>
        );
    } else {
        return (
            <Box sx={classes.wrapper}>
                <IconBtn icon={GitHub} href='https://github.com/davidjss04' />
                <IconBtn
                    icon={LinkedIn}
                    href='https://www.linkedin.com/in/davidjss04/'
                />
                <IconBtn icon={Twitter} href='https://twitter.com/davidjss04' />
                <IconBtn
                    icon={Instagram}
                    href='https://www.instagram.com/davidjss04/'
                />
                <DarkModeSwitch />
            </Box>
        );
    }
};

const styles = (theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        position: 'fixed',
        bottom: 0,
        right: 0,
        padding: theme.spacing(2),
        zIndex: 100,
    },
    mobileWrapper: {
        display: 'flex',
    },
});

export default Social;
