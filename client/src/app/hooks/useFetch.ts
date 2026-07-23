import { useCallback, useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';

interface UseFetchProps<T> {
    callback: (data?: T) => Promise<void>;
}

type UseFetchResult<T = void> = [
    error: string | null,
    isLoading: boolean,
    onFetch: (data?: T) => Promise<void>,
];

export const useFetch = <T>({
    callback,
}: UseFetchProps<T>): UseFetchResult<T> => {
    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    const onFetch = useCallback(
        async (data?: T) => {
            if (!isMounted.current) {
                return;
            }

            try {
                setError(null);
                setIsLoading(true);

                await callback(data);
            } catch (error) {
                if (!isMounted.current) {
                    return;
                }

                if (error instanceof AxiosError) {
                    const status = error.response?.status;
                    const serverMessage = error.response?.data;

                    switch (status) {
                        case 500:
                            setError('Повторите запрос позже');
                            return;
                        case 401:
                            setError('Неверный логин или пароль');
                            return;
                        case 403:
                            setError('Доступ к данным запрещен.');
                            return;
                        case 404:
                            setError('Данные не найдены.');
                            return;
                        case 409:
                            setError(
                                'Пользователь с таким логином уже существует',
                            );
                            return;
                        case 400:
                            setError(
                                typeof serverMessage === 'string'
                                    ? serverMessage
                                    : 'Ошибка в запросе',
                            );
                            return;
                        default:
                            setError('Произошла ошибка при загрузке данных');
                            return;
                    }
                } else {
                    const message =
                        error instanceof Error ? error.message : String(error);

                    setError(message);
                }
            } finally {
                if (isMounted.current) {
                    setIsLoading(false);
                }
            }
        },
        [callback],
    );

    return [error, isLoading, onFetch];
};
