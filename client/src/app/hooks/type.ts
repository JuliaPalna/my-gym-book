export interface UseFetchProps {
    callback: () => void;
}

export type UseFetchResult = [
    error: string | null,
    isLoading: boolean,
    onFetch: () => Promise<void>,
];
