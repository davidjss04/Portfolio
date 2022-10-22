import React, { useState } from 'react';
import {
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const pages = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CONTACT'];

const Menu = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<React.Fragment>
			<Drawer
				anchor="left"
				open={openMenu}
				onClose={() => setOpenMenu(false)}
			>
				<List>
					{pages.map((page, index) => (
						<ListItemButton key={index}>
							<ListItemIcon>
								<ListItemText>{page}</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					))}
				</List>
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

export default Menu;
