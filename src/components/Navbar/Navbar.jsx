import React, { useContext, useState, useEffect } from 'react';
import {
	AppBar,
	Button,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
	Link as MuiLink,
} from '@mui/material';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import LangSelector from './LangSelector';
import Menu from './Menu';
import Logo from './Logo';
import { styled } from '@mui/system';

const Navbar = () => {
	const [value, setValue] = useState();
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<React.Fragment>
			<AppBar sx={{ background: theme.palette.background.default }}>
				<Toolbar>
					<Logo />
					{isMatch ? (
						<>
							<Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
								Shoppee
							</Typography>
							<Menu />
						</>
					) : (
						<>
							<StyledTabs
								sx={{ marginLeft: 'auto' }}
								value={value}
								onChange={(e, value) => setValue(value)}
							>
								<StyledTab label="ABOUT" />
								<StyledTab label="EXPERIENCE" />
								<StyledTab label="PROJECTS" />
								<StyledTab label="CONTACT" />
							</StyledTabs>
							<Button
								component={MuiLink}
								href="/resume.pdf"
								color="primary"
								sx={{ marginLeft: '32px' }}
								variant="outlined"
								underline="none"
							>
								{'RESUMEN'}
							</Button>
							<LangSelector style={{ marginLeft: '32px' }} />
						</>
					)}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

const StyledTab = styled(Tab)(({ theme }) => ({
	transition: '.2s',
	minWidth: 120,
	'&:hover': {
		color: theme.palette.text.primary,
	},
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
	arialLabel: 'styled tabs',
	indicatorColor: theme.palette.text.primary,
	textColor: theme.palette.text.primary,
	'& > span': {
		maxWidth: 20,
	},
}));

export default Navbar;
