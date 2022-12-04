import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Divider } from '../components';

const SectionContainer = ({
    children,
    maxWidth,
    full,
    reverse,
    title,
    padding,
    ...rest
}) => {
    const classes = useStyles(padding);

    return (
        <Container sx={classes} component='section' {...rest}>
            {title && (
                <StyledTitleContainer component='span' variant='body2'>
                    <Divider width='20%' />
                    <StyledTitle variant='h4' color='text'>
                        {title}
                    </StyledTitle>
                    <Divider fullWidth />
                </StyledTitleContainer>
            )}
            {children}
        </Container>
    );
};

const useStyles = (padding) => ({
    paddingTop: padding ? `${padding}px` : '80px',
    paddingBottom: padding ? `${padding}px` : '80px',
});

const StyledTitleContainer = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    margin: theme.spacing(0, 4),
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
}));

export default SectionContainer;
