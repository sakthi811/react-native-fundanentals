import { StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

const { isDarkMode, toggleTheme } = useTheme();

export const ViewStyle = StyleSheet.create({
    darkThemeText : {
        backgroundColor :'white',
    },
    lightThemeText : {
        backgroundColor : 'black',
    },
});