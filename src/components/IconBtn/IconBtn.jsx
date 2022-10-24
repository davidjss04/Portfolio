import React from 'react';
import { Box, Link } from '@mui/material';

const IconBtn = ({ icon, href }) => {
	return (
		<Box
			display="inline"
			sx={{
				width: '300',
				height: '300',
				'&:hover': {
					transform: 'scale(1.1)',
					transition: 'transform 0.2s ease-in-out',
				},
			}}
		>
			<Link href={href}>{icon}</Link>
		</Box>
	);
};

export default IconBtn;
