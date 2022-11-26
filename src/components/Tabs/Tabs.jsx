import React, { useState } from 'react';
import {
    Tabs as TabsMui,
    Tab,
    Typography,
    Box,
    Link,
    useMediaQuery,
} from '@mui/material';
import { Language, Facebook, Instagram } from '@mui/icons-material';
import { experienceList } from '../../data';
import { useTheme } from '@mui/system';
import IconBtn from '../IconBtn/IconBtn';
import { useTranslation } from 'react-i18next';

const Tabs = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles(theme, { isMobile });
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={classes.root}>
            <TabsMui
                orientation={isMobile ? 'horizontal' : 'vertical'}
                value={value}
                onChange={handleChange}
                sx={classes.tabs}
                // classes={{ indicator: classes.indicator }}
                centered
            >
                {experienceList.map((elem) => (
                    <Tab label={elem.company} key={elem.id} />
                ))}
            </TabsMui>
            {experienceList.map((elem) => (
                <TabPanel value={value} index={elem.id} key={elem.id}>
                    <Box>
                        <Box mb={4}>
                            <Typography variant='h5'>
                                {t(`experience_${elem.id}_job`)} @{' '}
                                <Link
                                    href={
                                        elem.links.website ||
                                        elem.links.facebook ||
                                        elem.links.instagram
                                    }
                                    color='primary'
                                >
                                    {elem.company}
                                </Link>
                            </Typography>
                            <Typography
                                variant='body2'
                                color='textSecondary'
                                fontSize='14'
                            >
                                {t(`experience_${elem.id}_duration`)}
                            </Typography>
                        </Box>
                        <Box mb={4}>
                            <Typography variant='body1' color='textPrimary'>
                                {t(`experience_${elem.id}_overview`)}
                            </Typography>
                        </Box>
                        <Box>
                            {elem.links.website && (
                                 <IconBtn
                                    icon={Language}
                                    fontSize={28}
                                    m={1}
                                    href={elem.links.website}
                                /> 
                            )}
                            {elem.links.facebook && (
                                <IconBtn
                                    icon={Facebook}
                                    fontSize={28}
                                    m={1}
                                    href={elem.links.facebook}
                                />
                            )}
                            {elem.links.instagram && (
                                <IconBtn
                                    icon={Instagram}
                                    fontSize={28}
                                    m={1}
                                    href={elem.links.instagram}
                                />
                            )}
                        </Box>
                    </Box>
                </TabPanel>
            ))}
        </Box>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            role='tabpanel'
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} minHeight={isMobile ? 0 : '350px'}>
                    <div>{children}</div>
                </Box>
            )}
        </Box>
    );
}

const useStyles = (theme, props) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.main,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: props.isMobile ? 'column' : 'row',
    },
    tabs: {
        borderRight: props.isMobile
            ? 'none'
            : `1px solid ${theme.palette.secondary.main}`,
        borderBottom: !props.isMobile
            ? 'none'
            : `1px solid ${theme.palette.secondary.main}`,
        width: props.isMobile ? 'inherit' : '200px',
        maxWidth: props.isMobile ? 'inherit' : '200px',
        minWidth: props.isMobile ? 'inherit' : '200px',
    },
    indicator: {
        backgroundColor: 'red',
    },
});

export default Tabs;
