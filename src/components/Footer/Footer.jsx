import React from 'react';
import {
    Container,
    Typography,
    Box,
    Divider,
    useMediaQuery,
} from '@mui/material';
import Social from '../Social/Social';

import {useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Container>
            <Divider sx={{ backgroundColor: theme.palette.primary.main }} />
            <Box sx={classes.footer}>
                {isMobile && <Social mobile />}
                <Typography variant='body2' color='text'>
                    © 2022 David Huaricancha. @davidjss04
                </Typography>
            </Box>
        </Container>
    );
};

const useStyles = (theme) => ({
    footer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
    },
});

export default Footer;
