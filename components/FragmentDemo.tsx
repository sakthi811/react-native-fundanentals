import React from 'react';
import { Text } from 'react-native';

const FragmentDemo : React.FC = () => {
    return (
        <React.Fragment>
            <Text key="first">First Element</Text>
            <Text key="second">Second Element</Text>
            <Text key="third">Third Element</Text>
        </React.Fragment>
    );
};

export default FragmentDemo;