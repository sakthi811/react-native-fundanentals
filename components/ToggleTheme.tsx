import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useTheme } from '../ThemeContext';

function ToggleTheme() {
    const { isDarkMode, toggleTheme } = useTheme();
  
    return (
      <View style={{ backgroundColor : isDarkMode ? 'black' : 'white'}}>
        <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black'}]} >{isDarkMode ? 'Dark Mode' : 'Light Mode'} </Text>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    text:{
      fontSize: 24,
      color: 'blue',
    }
  });

  export default ToggleTheme;