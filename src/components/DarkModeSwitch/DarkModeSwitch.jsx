import React, { useContext } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import ThemeContext from '../../contexts/themeContext';
import { useTranslation } from 'react-i18next';

const DarkModeSwitch = () => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const { t } = useTranslation();
    // return (
    // 	<FormControlLabel
    // 		control={
    // 			<Switch
    // 				checked={isDarkMode}
    // 				name="checkedDarkMode"
    // 				color="primary"
    // 				onChange={() => {
    // 					if (onclose) {
    // 						onclose();
    // 					}
    // 					setIsDarkMode(!isDarkMode);
    // 				}}
    // 			/>
    // 		}
    // 		label={t('dark_mode')}
    // 	/>
    // );
    return <></>;
};

export default DarkModeSwitch;
