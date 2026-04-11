import { useCallback, useState } from 'react';
import type { UseFetchProps, UseFetchResult } from './type';

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
