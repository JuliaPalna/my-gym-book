import { type JSX } from 'react';
import { RoutesContainer } from './providers/routes';

export const App = (): JSX.Element => {
    return (
        <>
            <RoutesContainer />
        </>
    );
};

export default App;
