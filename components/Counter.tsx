import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Counter() {
    const [count,setCount] = useState(0);

    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 24,
      color: 'blue',
    }
});

export default Counter;
