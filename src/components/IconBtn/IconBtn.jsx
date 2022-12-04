import React from 'react';
import { Box, Link } from '@mui/material';
import { useTheme } from '@mui/system';
import { motion } from 'framer-motion';

const IconBtn = ({ icon: Icon, href, fontSize, ...rest }) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Box
            display='inline'
            {...rest}
            component={motion.div}
            whileHover={{ scale: 1.1 }}
        >
            <Link href={href}>
                <Icon sx={classes.icon} />
            </Link>
        </Box>
    );
};

const useStyles = (theme) => ({
    icon: {
        color: theme.palette.text.secondary,
        transition: '0.1s',
        cursor: 'pointer',
        fontSize: (props) => (props.fontSize ? `${props.fontSize}px` : '32px'),
        '&:hover': {
            color: theme.palette.text.primary,
        },
    },
});

export default IconBtn;
