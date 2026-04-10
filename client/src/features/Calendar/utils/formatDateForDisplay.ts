import type { MonthYearProps } from '../type';

export function formatDateForDisplay(period: MonthYearProps): null | string {
    const currentDate = new Date(period);

    if (isNaN(currentDate.getTime())) {
        return null;
    }

    const formatted = new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        year: 'numeric',
    }).format(currentDate);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
