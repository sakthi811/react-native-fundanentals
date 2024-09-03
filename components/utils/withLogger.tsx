import React, { useEffect } from 'react';

const withLogger = <P extends Object>(WrappedComponent: React.ComponentType<P>) => {

    const HOC: React.FC<P> = (props) => {

        useEffect(() => {
            console.log(`${WrappedComponent.name} mounted`);

            return () => {
                console.log(`${WrappedComponent.displayName} unmounted`);
            }
        }, []);

        return <WrappedComponent {...props} />
    }
    return HOC;
} 

export default withLogger;