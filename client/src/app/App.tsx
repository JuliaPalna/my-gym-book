import { RoutesContainer } from './router';
import { Header, Footer } from '../widgets';
import { useApp } from './useApp';

export const App = (): React.JSX.Element => {
    useApp();

    return (
        <div
            className="flex-column
            min-h-screen sm:min-h-screen box-border
            text-base text-brand-text
            bg-brand-bg"
        >
            <Header />

            <main
                className="relative @container grow
                w-full sm:max-w-4xl sm:mx-auto
                p-layout pb-0 sm:p-x-layout-sm lg:p-x-layout-lg
                pt-28 sm:pt-32"
            >
                <RoutesContainer />
            </main>

            <Footer />
        </div>
    );
};

export default App;
