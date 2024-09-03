import React, { ErrorInfo } from 'react';
import { Text, View } from 'react-native';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError : false };
    }

    static getDerivedStateFromError() : ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error : Error, info: ErrorInfo) {
        console.error("Caught an error: ", error, info);
    }

    render() {
        if(this.state.hasError) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, color: 'red' }}>Something went wrong!</Text>
                </View>
              );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
