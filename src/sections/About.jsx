import React from 'react';
import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Skills, Avatar } from '../components';
import { SectionContainer } from '../containers';
import { useTranslation } from 'react-i18next';

const About = () => {
    const theme = useTheme();
    const gridItem = useStyles(theme);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    return (
        <SectionContainer id='about' title={t('menu_about')} maxWidth='md'>
            <Grid container spacing={0} rowSpacing={6} sx={{ width: '100%' }}>
                {isMobile && (
                    <Grid item xs={12} md={5} sx={gridItem}>
                        <Avatar />
                    </Grid>
                )}
                <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                        ...gridItem,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box mb={4}>
                        <Typography variant='body1' align='left'>
                            {t('about_desc_1')}
                            <br />
                            <br />
                            {t('about_desc_2')}
                            <br />
                            <br />
                            {t('about_desc_3')}
                            <br />
                            <br />
                            {t('about_desc_4')}
                        </Typography>
                    </Box>
                    <Skills />
                </Grid>
                {!isMobile && (
                    <Grid item xs={10} md={5} sx={gridItem}>
                        <Avatar />
                    </Grid>
                )}
            </Grid>
        </SectionContainer>
    );
};

const useStyles = (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
});

export default About;
