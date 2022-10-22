import React, { useState } from 'react';
import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useTheme,
	Link as MuiLink,
	Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import LangSelector from './LangSelector';

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
							<StyledListItem key={index}>{page}</StyledListItem>
						))}
					</StyledList>
				</Box>
				<Box
					component="div"
					sx={{
						width: 250,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
					role="presentation"
				>
					<Button
						component={MuiLink}
						href="/resume.pdf"
						color="primary"
						sx={{ marginTop: '40px' }}
						variant="outlined"
						underline="none"
					>
						{'RESUMEN'}
					</Button>
					<LangSelector style={{ marginTop: '20px' }} />
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

const StyledListItem = styled(ListItem)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	padding: theme.spacing(2, 0),
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: 'rgb(80,80,80)',
	},
}));

export default Menu;
