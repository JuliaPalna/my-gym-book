import { type JSX } from 'react';
import { RoutesContainer } from './providers';
import { Header, Footer } from '../widgets';

export const App = (): JSX.Element => {
    return (
        <>
            <Header />

            <section>
                <RoutesContainer />
            </section>

            <Footer />
        </>
    );
};

export default App;
