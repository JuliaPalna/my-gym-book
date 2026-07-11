import { features } from './constants';

const MainPage = (): React.JSX.Element => {
    return (
        <>
            <div className="mx-auto max-w-2xl ">
                <h2 className="text-2xl sm:text-base/7 font-semibold text-brand-primary">
                    My Gym Book
                </h2>

                <p
                    className="mt-2 text-4xl font-semibold tracking-tight
                    text-pretty sm:text-5xl lg:text-balance"
                >
                    Всё необходимое для начала тренировки
                </p>

                <p className="hidden sm:block mt-6 text-lg/8">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet
                    quis. Suspendisse eget egestas a elementum
                </p>
            </div>

            <div
                className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl
            grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-y-16"
            >
                {features.map((feature) => (
                    <div key={feature.id} className="relative sm:pl-16">
                        <div
                            className="hidden sm:absolute sm:top-0 sm:left-0 sm:size-10
                            sm:flex-center sm:bg-brand-primary"
                        ></div>
                        <div className="text-base/7">
                            <p className="font-semibold text-2xl">
                                {feature.name}
                            </p>
                            <p className="pt-2">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MainPage;
