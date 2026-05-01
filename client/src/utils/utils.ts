// TODO
export const timestampToInputValue = (timestamp: number): string => {
    const date = new Date(timestamp);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 10);
};
