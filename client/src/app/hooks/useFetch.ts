import { useCallback, useState } from 'react';
import type { UseFetchProps, UseFetchResult } from './type';
import { AxiosError } from 'axios';

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
                    const message = error.response?.data;
                    setError(message);
                    return;
                }

                const message =
                    error instanceof Error ? error.message : String(error);
                setError(message);
            } finally {
                setIsLoading(false);
            }
        },
        [callback],
    );

    return [error, isLoading, onFetch];
};
