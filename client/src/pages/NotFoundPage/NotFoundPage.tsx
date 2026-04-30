export const NotFoundPage: React.FC = () => {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-teal-900">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-7xl">
                    Страница не найдена
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-neutral-500 sm:text-xl/8">
                    Извините, нам не удалось найти нужную вам страницу.
                </p>
            </div>
        </main>
    );
};
