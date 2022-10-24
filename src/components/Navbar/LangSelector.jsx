import React, { useState } from 'react';
import { Menu, MenuItem, Button, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'flag-icon-css/css/flag-icons.min.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { createTheme, useTheme } from '@mui/material/styles';
import { ThemeContext } from '@emotion/react';

const languages = [
	{
		code: 'es',
		name: 'ES',
		country_code: 'es',
	},
	{
		code: 'en',
		name: 'EN',
		country_code: 'gb',
	},
];

const LangSelector = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const theme = useTheme();
	const { t } = useTranslation();
	const handleClose = (code) => {
		i18n.changeLanguage(code);
		setAnchorEl(null);
		if (props.onClose) {
			props.onClose();
		}
	};

	const currentLanguage = languages.find((elem) => elem.code === t('language'));

	return (
		<div {...props}>
			<Button
				variant="contained"
				color="primary"
				onClick={(e) => setAnchorEl(e.currentTarget)}
			>
				{currentLanguage && (
					<>
						<Box
							component={'span'}
							sx={{ marginRight: theme.spacing(1) }}
							className={`flag-icon flag-icon-${currentLanguage.country_code}`}
						/>
						{currentLanguage.name}
					</>
				)}
				<KeyboardArrowDownIcon sx={{ color: 'white' }} />
			</Button>
			<Menu
				id="profile-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
				keepMounted
				elevation={0}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				sx={{
					'& .MuiPaper-root': {
						backgroundColor: theme.palette.primary.main,
						marginTop: '2px',
						boxShadow: theme.shadows[4],
					},
				}}
				disableScrollLock
			>
				<MenuItem
					sx={{
						'&:hover': {
							backgroundColor: theme.backgroundSecondary,
						},
					}}
					onClick={() => handleClose('en')}
				>
					<Box
						component={'span'}
						className={`flag-icon flag-icon-gb`}
						sx={{ marginRight: theme.spacing(1) }}
					/>
					EN
				</MenuItem>
				<MenuItem
					sx={{
						'&:hover': {
							backgroundColor: theme.backgroundSecondary,
						},
					}}
					onClick={() => handleClose('es')}
				>
					<Box
						component={'span'}
						className={`flag-icon flag-icon-es`}
						sx={{ marginRight: theme.spacing(1) }}
					/>
					ES
				</MenuItem>
			</Menu>
		</div>
	);
};

// const CustomSpan = styled('span')(({ theme }) => ({
//   ...theme.typography.button,
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(1),
// }));

export default LangSelector;
