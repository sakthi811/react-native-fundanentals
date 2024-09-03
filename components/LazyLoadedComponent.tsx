import React from 'react';
import { View, Text } from 'react-native';

const LazyLoadedComponent: React.FC = () => {
    return <View>
        <Text>This component is Lazily Loaded!</Text>
    </View>
}

export default LazyLoadedComponent;