import React, { useState } from 'react';
import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

const pages = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CONTACT'];

const Menu = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const theme = useTheme();

	return (
		<React.Fragment>
			<Drawer
				anchor="left"
				open={openMenu}
				onClose={() => setOpenMenu(false)}
				sx={{
					'& .MuiDrawer-paper': {
						backgroundColor: theme.palette.background.default,
					},
				}}
			>
				<Box component="div" sx={{ width: 250 }} role="presentation">
					<StyledList>
						{pages.map((page, index) => (
							<StyledListItem key={index}>
								<ListItemIcon>
									<ListItemText>{page}</ListItemText>
								</ListItemIcon>
							</StyledListItem>
						))}
					</StyledList>
				</Box>
			</Drawer>
			<IconButton
				sx={{ color: 'white', marginLeft: 'auto' }}
				onClick={() => setOpenMenu(!openMenu)}
			>
				<MenuIcon color="white" />
			</IconButton>
		</React.Fragment>
	);
};

const StyledList = styled(List)(({ theme }) => ({
	width: 'auto',
	marginTop: theme.spacing(4),
}));

const StyledListItem = styled(ListItemButton)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	padding: theme.spacing(2, 0),
	'&:hover': {
		backgroundColor: 'rgb(80,80,80)',
	},
}));

export default Menu;
