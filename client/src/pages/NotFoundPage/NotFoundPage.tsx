const NotFoundPage = (): React.JSX.Element => {
    return (
        <div className="grid min-h-full place-items-center bg-light px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center font-semibold text-balance">
                <p>404</p>
                <h1 className="mt-4 text-5xl tracking-tight sm:text-7xl">
                    Страница не найдена
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">
                    Извините, нам не удалось найти нужную вам страницу.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
