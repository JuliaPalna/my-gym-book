import type { PeriodProps } from '../type';
import { checkValidPeriod } from './checkValidPeriod';

export function formatDateForDisplay(period: PeriodProps): null | string {
    if (!checkValidPeriod(period)) {
        return null;
    }

    const currentDate: Date = new Date(period.year, period.month - 1, 1);

    if (isNaN(currentDate.getTime())) {
        return null;
    }

    const formatted: string = new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        year: 'numeric',
    }).format(currentDate);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
