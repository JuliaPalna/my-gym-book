import { useCallback, useState } from 'react';
import type { UseFetchProps, UseFetchResult } from './type';

export const useFetch = ({ callback }: UseFetchProps): UseFetchResult => {
    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onFetch = useCallback(async () => {
        try {
            setError(null);
            setIsLoading(true);
            await callback();
        } catch (error) {
            const message =
                error instanceof Error ? error.message : String(error);
            setError(message);
        } finally {
            setIsLoading(false);
        }
    }, [callback]);

    return [error, isLoading, onFetch];
};
