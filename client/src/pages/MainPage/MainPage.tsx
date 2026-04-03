import { type JSX } from 'react';

export const MainPage = (): JSX.Element => {
    const features = [
        {
            name: 'Календарь',
            description: 'slenlsengljwenglwngw klnglnwek welkmgwekmg wetmwmtl',
            icon: <img src="#" alt="drger" />,
        },
        {
            name: 'Аналитика',
            description: 'slenlsengljwenglwngw klnglnwek welkmgwekmg wetmwmtl',
            icon: <img src="#" alt="drger" />,
        },
        {
            name: 'Таймер',
            description: 'welkmgwekmg wetmwmtl',
            icon: <img src="#" alt="drger" />,
        },
    ];
    return (
        <>
            <div className="mx-auto max-w-2xl ">
                <h2 className="text-2xl sm:text-base/7 font-semibold text-teal-700">
                    My Gym Book
                </h2>

                <p
                    className="mt-2 text-4xl font-semibold tracking-tight
                text-pretty text-neutral-900 sm:text-5xl lg:text-balance"
                >
                    Всё необходимое для начала тренировки
                </p>

                <p className="hidden sm:block mt-6 text-lg/8 text-neutral-700">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet
                    quis. Suspendisse eget egestas a elementum
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative sm:pl-16">
                            <dt className="text-base/7 font-semibold text-neutral-900">
                                <div
                                    className="hidden  sm:absolute sm:top-0 sm:left-0  sm:size-10
                                sm:flex sm:items-center sm:justify-center sm:rounded-lg sm:bg-teal-600"
                                >
                                    <img
                                        aria-hidden="true"
                                        className="size-6 text-white"
                                    />
                                </div>
                                <p className="text-2xl">{feature.name}</p>
                            </dt>

                            <dd className="mt-2 text-base/7 text-neutral-700">
                                {feature.description}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    );
};
