import React, { useState } from 'react';
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useTheme,
    Link as MuiLink,
} from '@mui/material';
import LangSelector from './LangSelector';
import Menu from './Menu';
import Logo from './Logo';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Link, Events } from 'react-scroll';

const AnimatedLink = React.forwardRef((props, ref) => <Link {...props} />);

const Navbar = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isScrolling, setIsScrolling] = useState(false);
    const [resume, setResume] = useState(null);

    React.useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {
            setIsScrolling(true);
        });

        Events.scrollEvent.register("end", (to, element) => {
            setIsScrolling(false);
        });
    });

    const resumens = {
        es: 'resume_es.pdf',
        en: 'resume_en.pdf',
    };

    const spyHandleChange = (index) => {
        if (!isScrolling) {
            setValue(index);
        }
    };

    const handleResume = () => {
        setResume(resumens[i18n.language]);
    };

    return (
        <>
            <StyledAppBar elevation={0} position='fixed' conponent='nav'>
                <Toolbar>
                    <Logo />
                    {isMobile ? (
                        <>
                            <Menu resume={i18n.language} />
                        </>
                    ) : (
                        <>
                            <StyledTabs
                                sx={{ marginLeft: 'auto' }}
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <StyledTab
                                    component={AnimatedLink}
                                    to='about'
                                    offset={-100}
                                    label={t('menu_about')}
                                    onSetActive={() => spyHandleChange(0)}
                                    onSetInactive={() => spyHandleChange(false)}
                                />
                                <StyledTab
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    to='experience'
                                    component={AnimatedLink}
                                    label={t('menu_experience')}
                                />
                                <StyledTab
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    to='projects'
                                    component={AnimatedLink}
                                    label={t('menu_projects')}
                                />
                                <StyledTab
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    to='contact'
                                    component={AnimatedLink}
                                    label={t('menu_contact')}
                                />
                            </StyledTabs>
                            <Button
                                component={MuiLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                href={resume}
                                color='primary'
                                sx={{ marginLeft: '32px' }}
                                variant='outlined'
                                underline='none'
                                onClick={handleResume}
                            >
                                {t('menu_resume')}
                            </Button>
                            <LangSelector style={{ marginLeft: '32px' }} />
                        </>
                    )}
                </Toolbar>
            </StyledAppBar>
        </>
    );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1),
    },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    transition: '.2s',
    minWidth: 120,
    '&:hover': {
        color: theme.palette.text.primary,
    },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    arialLabel: 'styled tabs',
    indicatorColor: theme.palette.primary.main,
    textColor: theme.palette.text.primary,
    '& > span': {
        maxWidth: 20,
    },
}));

export default Navbar;
