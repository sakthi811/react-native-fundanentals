import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useTheme } from '../ThemeContext';

type GreetingProps = {
    name : string;
    age: number;
    isStudent?: boolean;
}

const Greeting : React.FC<GreetingProps> = ({ name, age, isStudent }) => {

    return (
        <View >
            <Text style={styles.text}>Hello, my Name is { name } </Text>
            <Text style={styles.text}>I am { age } years old.</Text>
            {isStudent && <Text style={styles.text}>I am a Student.</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
      fontSize: 24,
      color: 'blue',
    }
});

export default Greeting;