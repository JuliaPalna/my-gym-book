export function formatDateForDisplay(date: Date): string {
    const formatted: string = new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        year: 'numeric',
    }).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
