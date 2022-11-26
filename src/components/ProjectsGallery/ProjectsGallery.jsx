import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Card from './Card';
import ExtendedCard from './ExtendedCard';
import { projectList } from '../../data';
import { useTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';

const ProjectsGallery = () => {
    const theme = useTheme();
    const classes = styles(theme);

    const { t } = useTranslation();
    const [selectedId, setSelectedId] = useState(null);
    const getSelected = (id) => projectList.find((elem) => elem.id === id);

    return (
        <div>
            <Grid container spacing={4} sx={classes.galleryContainer}>
                {projectList.map((item, key) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={key}
                        sx={classes.item}
                    >
                        <Card
                            id={item.id}
                            title={item.title}
                            overview={t(`projects_${item.id}_overview`)}
                            backgroundImage={item.backgroundImage}
                            frontImage={item.frontImage}
                            technologies={item.technologies}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                        />
                    </Grid>
                ))}
            </Grid>
            <AnimatePresence>
                {selectedId && (
                    <ExtendedCard
                        key={selectedId}
                        id={selectedId}
                        title={getSelected(selectedId).title}
                        overview={t(`projects_${selectedId}_extended_overview`)}
                        backgroundImage={
                            getSelected(selectedId).backgroundImage
                        }
                        frontImage={getSelected(selectedId).frontImage}
                        technologies={getSelected(selectedId).technologies}
                        handleClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

const styles = (theme) => ({
    galleryContainer: {
        overflow: 'visible',
        width: '100%',
        margin: '0 auto',
    },
    item: {
        overflow: 'visible',
    },
});

export default ProjectsGallery;
