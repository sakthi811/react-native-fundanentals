import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LifeCycleDemo from './LifeCycleDemo';
import withLogger from './utils/withLogger';
import FragmentDemo from './FragmentDemo';
import Greeting from './Greeting';

const DetailScreen: React.FC<{navigation : any}> = ({ navigation }) => {

  const LoggedComponent = withLogger(LifeCycleDemo);
  LifeCycleDemo.displayName = 'LifeCycleDemo';

    return (
        <View>
          <Text style={styles.text}>Details Screen</Text>
          <LoggedComponent />
          <FragmentDemo />
          <Greeting name="Sakthivel" age={34} isStudent={false}/>
          <Greeting name="Diya" age={9} isStudent={true}/>
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
  });

  export default DetailScreen;