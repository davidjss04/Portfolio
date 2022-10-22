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

const Navbar = () => {
	const [value, setValue] = useState();
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<React.Fragment>
			<AppBar sx={{ background: theme.palette.background.default }}>
				<Toolbar>
					<AddBusinessRoundedIcon sx={{ transform: 'scale(2)' }} />
					{isMatch ? (
						<>
							<Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
								Shoppee
							</Typography>
							<Menu />
						</>
					) : (
						<>
							<Tabs
								sx={{ marginLeft: 'auto' }}
								indicatorColor="secondary"
								textColor="inherit"
								value={value}
								onChange={(e, value) => setValue(value)}
							>
								<Tab label="ABOUT" />
								<Tab label="EXPERIENCE" />
								<Tab label="PROJECTS" />
								<Tab label="CONTACT" />
							</Tabs>
							<Button
								component={MuiLink}
								href="/resume.pdf"
								color="primary"
								sx={{ marginLeft: 'auto' }}
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

export default Navbar;
