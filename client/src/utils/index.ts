export const timestampToInputValue = (
    timestamp: number | undefined,
): string => {
    if (!timestamp) {
        return '';
    }
    const date = new Date(timestamp);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 10);
};

export const inputValueToTimestamp = (value: string): number => {
    return new Date(value).getTime();
};
