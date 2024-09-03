import React , { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LifeCycleDemo : React.FC = () => {
    const [count, setCount] = useState(0);

/*     useEffect(() => {
        console.log('Component mounted or updaetd');

        return ()  => {
            console.log('Component will unmount');
        }
    }, [count]); */

    return (
        <View>
            <Text >Count : {count} </Text>
            <Button title = "Increment" onPress={() => setCount(count + 1)} />
        </View>
    )
    /* state = {
        count : 0,
    };

    componentDidMount() {
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if( prevState.count !== this.state.count) {
            console.log('component updated, new count : ', this.state.count);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>Count: {this.state.count}</Text>
                <Button title="Increment" onPress={()=> this.setState({count : this.state.count + 1})} />
            </View>
        )
    } */
}

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
  });
  
  export default LifeCycleDemo;