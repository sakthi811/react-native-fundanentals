import React, { Suspense } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const LazyLoadedComponent = React.lazy(() => import('./LazyLoadedComponent'));

const BuggyComponent: React.FC = () => {
    throw new Error("I crashed!");
    return null;
};

const LazyLoader : React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Lazy Loading Example!</Text>
            {/* Suspense to show fallback during lazy loading */}
            <Suspense fallback={<ActivityIndicator size="large" color="#007bff" />} >
                <LazyLoadedComponent />
            </Suspense>
        </View>
    )
}

export default LazyLoader;