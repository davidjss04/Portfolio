import React from 'react';
import {
    Card as MuiCard,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { GitHub, Language } from '@mui/icons-material';

const ExtendedCard = ({
    id,
    title,
    backgroundImage,
    frontImage,
    overview,
    technologies,
    handleClose,
    links,
    ...rest
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Box sx={classes.wrapper}>
            <MuiCard
                elevation={0}
                component={motion.div}
                layoutId={id}
                style={classes.root}
            >
                <Box sx={{ position: 'relative' }}>
                    <Box>
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
                        <CardContent>
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
                                component={motion.h5}
                                style={classes.overview}
                                layoutId={`overview-${id}`}
                            >
                                {overview}
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={classes.technologies}
                                component={motion.h5}
                                layoutId={`technologies-${id}`}
                                color='primary'
                            >
                                {technologies.join(' · ')}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '30px',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                }}
                            >
                                {links.github && (
                                    <IconButton sx={classes.iconButton} href={links.github}>
                                        <GitHub sx={{ fontSize: 40 }} />
                                    </IconButton>
                                )}

                                {links.url && (
                                    <IconButton sx={classes.iconButton} href={links.url}>
                                        <Language sx={{ fontSize: 40 }} />
                                    </IconButton>
                                )}
                            </Box>
                        </CardContent>
                    </Box>
                    <IconButton
                        sx={classes.closeBtn}
                        onClick={() => handleClose()}
                    >
                        <Close />
                    </IconButton>
                </Box>
            </MuiCard>
            <motion.div
                style={classes.container}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                intial='hidden'
                animate='visible'
                exit='hidden'
                onClick={() => handleClose()}
            ></motion.div>
        </Box>
    );
};

const useStyles = (theme) => ({
    wrapper: {
        position: 'fixed',
        overflow: 'scroll',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: '10000',
    },
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.22)',
        backdropFilter: 'blur(2px)',
        opacity: 0,
    },
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        margin: '0 auto',
        marginTop: `calc( ${theme.navbarHeight} + 20px )`,
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        maxHeight: 'auto',
        zIndex: '10000',
        boxShadow: theme.shadows[10],
        backgroundColor: theme.palette.secondary.main,
    },
    media: {
        height: '100%',
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
        color: theme.palette.secondary.contrastText,
    },
    overview: {
        fontSize: '14px',
        marginBottom: theme.spacing(1),
        color: theme.palette.secondary.contrastText,
    },
    technologies: {
        fontSize: '15px',
        color: theme.palette.primary.main,
    },
    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '2px',
        color: 'white',
    },
    iconButton: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.22)',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.22)',
        },
    },
});

export default ExtendedCard;
