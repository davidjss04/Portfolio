import React, { useContext, useEffect } from 'react';
import { LinkedIn, Instagram, Twitter, GitHub } from '@mui/icons-material';
import { Box, Link } from '@mui/material';
import styled from '@emotion/styled';
import IconBtn from '../IconBtn/IconBtn.jsx';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import loaderContext from '../../contexts/loaderContext';

const Social = ({ mobile }) => {
	const { isLoading } = useContext(loaderContext);

	// useEffect(() => {

	// }, [isLoading]);

	if (mobile) {
		return (
			<StyledSocialMobile>
				<IconBtn
					icon={<GitHub sx={StyledIcon} />}
					href="https://github.com/davidjss04"
				/>
				<IconBtn
					icon={<LinkedIn />}
					href="https://www.linkedin.com/in/davidjss04/"
				/>
				<IconBtn
					icon={<Twitter sx={StyledIcon} />}
					href="https://twitter.com/davidjss04"
				/>
				<IconBtn
					icon={<Instagram sx={StyledIcon} />}
					href="https://www.instagram.com/davidjss04/"
				/>
			</StyledSocialMobile>
		);
	} else {
		return (
			<StyledSocialDesktop>
				<IconBtn
					icon={<GitHub sx={StyledIcon} />}
					href="https://github.com/davidjss04"
				/>
				<IconBtn
					icon={<LinkedIn sx={StyledIcon} />}
					href="https://www.linkedin.com/in/davidjss04/"
				/>
				<IconBtn
					icon={<Twitter sx={StyledIcon} />}
					href="https://twitter.com/davidjss04"
				/>
				<IconBtn
					icon={<Instagram sx={StyledIcon} />}
					href="https://www.instagram.com/davidjss04/"
				/>
				<DarkModeSwitch />
			</StyledSocialDesktop>
		);
	}
};

const StyledSocialMobile = styled(Box, {
	display: 'flex',
});

const StyledSocialDesktop = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	position: 'fixed',
	bottom: 0,
	right: 0,
	padding: theme.spacing(2),
	zIndex: 100,
}));

const StyledIcon = (theme) => ({
	color: theme.palette.text.secondary,
	transition: '0.1s',
	cursor: 'pointer',
	fontSize: (props) => (props.fontSize ? `${props.fontSize}px` : '40px'),
	'&:hover': {
		color: theme.palette.text.primary,
	},
});

export default Social;
