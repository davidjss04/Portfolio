import React from 'react'
import {
    Card as MuiCard,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import {Close} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";


const ExtendedCard = ({ id, title, backgroundImage, frontImage, overview, technologies, handleClose, ...rest }) => {
    const theme  = useTheme();
    const classes = useStyles(theme);

    return (
        <Box sx={classes.wrapper}>
            <MuiCard sx={classes.root} elevation={0} component={motion.div} layoutId={id}>
                <Box sx={{ position: "relative" }}>
                    <Box>
                        <CardMedia
                            component={motion.div}
                            layoutId={`img-container-${id}`}
                            sx={classes.media}
                            image={backgroundImage}
                            title={title}
                        >
                            <motion.img
                                layoutId={`front-img-${id}`}
                                sx={classes.frontImage}
                                src={frontImage}
                                alt={title}
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography
                                variant="h5"
                                sx={classes.title}
                                component={motion.h5}
                                layoutId={`title-${id}`}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={classes.overview}
                                component={motion.h5}
                                layoutId={`overview-${id}`}
                            >
                                {overview}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={classes.technologies}
                                component={motion.h5}
                                layoutId={`technologies-${id}`}
                                color="primary"
                            >
                                {technologies.join(" · ")}
                            </Typography>
                        </CardContent>
                    </Box>
                    <IconButton sx={classes.closeBtn} onClick={()=>handleClose()}>
                        <Close  />
                    </IconButton>
                </Box>
            </MuiCard>
            <motion.div
                sx={classes.container}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                intial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleClose()}
            ></motion.div>
        </Box>
    );
}

const useStyles = (theme) => ({
    wrapper: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: "10000",
    },
    container: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.22)",
        backdropFilter: "blur(2px)",
        opacity: 0,
    },
    root: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        margin: "0 auto",
        marginTop: `calc( ${theme.navbarHeight} + 20px )`,
        width: "90%",
        maxWidth: "600px",
        height: "600px",
        maxHeight:"80%",
        zIndex: "10000",
        boxShadow: theme.shadows[10],
        backgroundColor: theme.palette.secondary.main,
    },
    media: {
        height: "300px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
    },
    frontImage: {
        marginTop: "20px",
        objectFit: "cover",
        objectPosition: "center top",
        width: "90%",
        boxShadow: theme.shadows[8],
    },
    title: {
        fontSize: "20px",
        fontWeight: 700,
        marginBottom: theme.spacing(1),
        color:theme.palette.secondary.contrastText
    },
    overview: {
        fontSize: "14px",
        marginBottom: theme.spacing(1),
        color:theme.palette.secondary.contrastText,
        
    },
    technologies: {
        fontSize: "15px",
        color:"rgb(10,10,10)",
    },
    closeBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        margin:"2px",
        color:"white"
    },
});

export default ExtendedCard