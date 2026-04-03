import { type JSX } from 'react';
import { RoutesContainer } from './providers';
import { Header, Footer } from '../widgets';

export const App = (): JSX.Element => {
    return (
        <div
            className="flex flex-col justify-center items-center
            min-h-screen sm:min-h-screen box-border
            text-neutral-900 bg-white"
        >
            <Header />

            <main
                className="@container grow max-w-7xl w-full
            pt-40 sm:pt-32 px-3 sm:px-10 lg:px-10 text-base "
            >
                <RoutesContainer />
            </main>

            <Footer />
        </div>
    );
};

export default App;
