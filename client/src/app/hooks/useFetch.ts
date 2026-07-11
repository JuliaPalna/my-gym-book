import { useCallback, useState } from 'react';
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

    const onFetch = useCallback(
        async (data?: T) => {
            try {
                setError(null);
                setIsLoading(true);
                await callback(data);
            } catch (error) {
                if (error instanceof AxiosError) {
                    const status = error.response?.status;

                    switch (status) {
                        case 500:
                            setError('Повторите запрос позже');
                            return;
                        case 401:
                            setError('Требуется авторизация.');
                            return;
                        case 403:
                            setError('Доступ к данным запрещен.');
                            return;
                        case 404:
                            setError('Данные не найдены.');
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
                setIsLoading(false);
            }
        },
        [callback],
    );

    return [error, isLoading, onFetch];
};
