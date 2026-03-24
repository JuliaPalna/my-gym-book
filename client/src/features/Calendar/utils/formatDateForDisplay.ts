export function formatDateForDisplay(period: { month: number; year: number }) {
    // const currentDate = new Date(`${dateString}-01`);
    const currentDate = new Date(`${period.year}-${period.month}`);

    if (isNaN(currentDate.getTime())) {
        return 'Ошибка. Некорректная дата';
    }

    const formatted: string = new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        year: 'numeric',
    }).format(currentDate);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
