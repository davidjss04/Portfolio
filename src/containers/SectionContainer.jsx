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
    return (
        <StyledContainer component='section' {...rest}>
            {title && (
                <StyledTitleContainer component='span' variant='body2'>
                    <Divider width='20%' />
                    <StyledTitle variant='h4' color='initial'>
                        {title}
                    </StyledTitle>
                    <Divider fullWidth />
                </StyledTitleContainer>
            )}
            {children}
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
}));

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

const ChildrenContainer = styled('div')(() => ({
    minHeight: '100%',
}));

export default SectionContainer;
