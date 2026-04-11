export interface UseFetchProps<T> {
    callback: (data?: T) => Promise<void>;
}

export type UseFetchResult<T = void> = [
    error: string | null,
    isLoading: boolean,
    onFetch: (data?: T) => Promise<void>,
];
