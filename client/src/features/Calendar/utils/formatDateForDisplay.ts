export function formatDateForDisplay(dateString: string): string {
    const currentDate = new Date(`${dateString}-01`);

    if (isNaN(currentDate.getTime())) {
        return 'Ошибка. Некорректная дата';
    }

    const formatted: string = new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        year: 'numeric',
    }).format(currentDate);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
