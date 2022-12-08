import React, { useState } from 'react';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    useTheme,
    Link as MuiLink,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import LangSelector from './LangSelector';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import { Link, Events } from 'react-scroll';

const AnimatedLink = React.forwardRef((props, ref) => <Link {...props} />);

const Menu = ({ resume }) => {
    const { t } = useTranslation();
    const [value, setValue] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const theme = useTheme();

    React.useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            setIsScrolling(true);
        });

        Events.scrollEvent.register('end', (to, element) => {
            setIsScrolling(false);
        });
    });

    const spyHandleChange = (index) => {
        if (!isScrolling) {
            setValue(index);
        }
    };

    return (
        <React.Fragment>
            <Drawer
                anchor='left'
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: theme.palette.background.default,
                    },
                }}
            >
                <Box component='div' sx={{ width: 250 }} role='presentation'>
                    <StyledList>
                        <StyledListItem
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            label={t('menu_about')}
                            component={AnimatedLink}
                        >
                            {t('menu_about')}
                        </StyledListItem>
                        <StyledListItem
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to='experience'
                            component={AnimatedLink}
                        >
                            {t('menu_experience')}
                        </StyledListItem>
                        <StyledListItem
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to='projects'
                            component={AnimatedLink}
                        >
                            {t('menu_projects')}
                        </StyledListItem>
                        <StyledListItem
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            to='contact'
                            component={AnimatedLink}
                        >
                            {t('menu_contact')}
                        </StyledListItem>
                    </StyledList>
                </Box>
                <Box
                    component='div'
                    sx={{
                        width: 250,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    role='presentation'
                >
                    <Button
                        component={MuiLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        href={
                            resume === 'es' ? 'resume_es.pdf' : 'resume_en.pdf'
                        }
                        color='primary'
                        sx={{ marginTop: '20px' }}
                        variant='outlined'
                        underline='none'
                    >
                        {'RESUMEN'}
                    </Button>
                    <LangSelector
                        style={{ marginTop: '20px', marginBottom: '30px' }}
                    />
                    <DarkModeSwitch />
                </Box>
            </Drawer>
            <IconButton
                sx={{ color: 'white', marginLeft: 'auto' }}
                onClick={() => setOpenMenu(!openMenu)}
            >
                <MenuIcon color='white' />
            </IconButton>
        </React.Fragment>
    );
};

const StyledList = styled(List)(({ theme }) => ({
    width: 'auto',
    marginTop: theme.spacing(4),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgb(80,80,80)',
    },

    '&.mouse': {
        backgroundColor: 'rgb(80,80,80)',
    },
}));

export default Menu;
