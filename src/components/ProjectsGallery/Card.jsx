import React from 'react';
import {
    Card as MuiCard,
    CardContent,
    CardMedia,
    Typography,
    Icon,
    Box,
} from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import { motion, useAnimationControls } from 'framer-motion';
import { useTheme } from '@mui/system';


const hoverVariants = {
    hover: {
        opacity: 1,
    },
    initial: {
        opacity: 0,
    },
};

const titleVariants = {
    hover: {
        y: 0,
        opacity: 1,
    },
    initial: {
        opacity: 0,
        y: 50,
    },
};

const Card = ({
    id,
    title,
    backgroundImage,
    frontImage,
    overview,
    technologies,
    onClick,
    ...rest
}) => {
    const theme = useTheme();
    const classes = styles(theme);
    const controls = useAnimationControls();

    const handleMouseEnterControls = () => {
        controls.start('hover');
    };
    const handleMouseLeaveControls = () => {
        controls.start('initial');
    };
    controls.start('initial');

    return (
        <MuiCard
            sx={classes.root}
            elevation={10}
            component={motion.div}
            layoutId={id}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
            onClick={() => onClick()}
            {...rest}
        >
            <Box component={'div'}>
                <CardMedia
                    component={motion.div}
                    layoutId={`img-container-${id}`}
                    style={classes.media}
                    image={backgroundImage}
                    title={title}
                >
                    <motion.img
                        layoutId={`front-img-${id}`}
                        style={classes.frontImage}
                        src={frontImage}
                        alt={title}
                    />
                </CardMedia>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={classes.title}
                        component={motion.h5}
                        layoutId={`title-${id}`}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={({ ...classes.overview }, { flexGrow: 2 })}
                        component={motion.h5}
                        layoutId={`overview-${id}`}
                    >
                        {overview}
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={classes.technologies}
                        component={motion.h5}
                        layoutId={`technologies-${id}`}
                    >
                        {technologies.join(' · ')}
                    </Typography>
                </CardContent>
            </Box>
            <motion.div
                transition={{ delay: 0.15 }}
                variants={hoverVariants}
                animate={controls}
                style={classes.hover}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    transition={{ delay: 0.3 }}
                    component={motion.div}
                    variants={titleVariants}
                    animate={controls}
                    display='grid'
                    gridTemplateRows='1fr 1fr'
                    gridTemplateColumns='1fr 1fr 1fr 1fr'
                    gap={2}
                >
                    <Box mr={1} gridColumn='span 3'>
                        <Typography variant='h4' sx={{ color: 'text' }}>
                            View project
                        </Typography>
                    </Box>
                    <Icon
                        component={motion.div}
                        transition={{
                            delay: 0.3,
                            repeat: Infinity,
                            duration: 1,
                            repeatType: 'reverse',
                        }}
                        variants={{ hover: { y: 7 }, intial: { y: -2 } }}
                        animate='hover'
                        sx={{ color: 'text' }}
                    >
                        <ArrowDownward />
                    </Icon>
                </Box>
            </motion.div>
        </MuiCard>
    );
};

const styles = (theme) => ({
    root: {
        position: 'relative',
        height: 400,
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: theme.palette.secondary.main,
    },

    media: {
        height: 200,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'hidden',
    },
    frontImage: {
        marginTop: '20px',
        objectFit: 'cover',
        objectPosition: 'center top',
        width: '90%',
        boxShadow: theme.shadows[8],
    },
    title: {
        fontSize: '20px',
        fontWeight: 700,
        marginBottom: theme.spacing(1),
        color: theme.palette.text.primary,
    },
    overview: {
        fontSize: '14px',
        marginBottom: theme.spacing(4),
        color: theme.palette.text.primary,
    },
    technologies: {
        fontSize: '16px',
        color: theme.palette.primary.main,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(6),
    },
    hover: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.97)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Card;
