import React from 'react';
import { images } from '../../assets/images';
import { styled } from '@mui/material/styles';

const Avatar = () => {
    return <StyledAvatar src={images.avatar} alt='davidjss' />;
};

const StyledAvatar = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    maxWidth: '80%',
    maxHeight: '80%',
    minWidth: '280px',
    minHeight: '280px',
    objectFit: 'cover',
    objectPosition: 'center',
    boxShadow: theme.shadows[10],
}));

export default Avatar;
