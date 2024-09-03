import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, useTheme } from '../ThemeContext';
import ToggleTheme from './ToggleTheme';
import StyledComponent from './StyledComponent';
import LazyLoader from './LazyLoader';
import ErrorBoundary from './ErrorBoundary';
import store, { increment, decrement, reset } from '../store';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    const dispatch = useDispatch();
    const count = useSelector((state:any) => state.counter.value);

    return (
        <ThemeProvider>
        <View style={styles.container}>
            <ToggleTheme />
            <View>
                <Text style={styles.text}>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            
            <View>
                <Text style={styles.text}>Count: {count}</Text> 
                <Button title="Increment" onPress={()=> dispatch(increment())}></Button>
                <Button title="Decrement" onPress={()=> dispatch(decrement())}></Button>
                <Button title="Reset" onPress={()=> dispatch(reset()) }></Button>
            </View>
            <StyledComponent />
            <ErrorBoundary>
                <LazyLoader />
            </ErrorBoundary>
        </View>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;