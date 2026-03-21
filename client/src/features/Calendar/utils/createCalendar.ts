import { getCurrentDate } from './getCurrentDate';

interface createCalendarProps {
    month?: number;
    year?: number;
}

export function createCalendar(data: createCalendarProps) {
    const calendarDays: (number | undefined | '')[] = [];

    let month: number = 0;
    let year: number = 0;

    if (!data.month || !data.year) {
        const resolve = getCurrentDate();
        month = resolve.month;
        year = resolve.year;
    } else {
        month = data.month;
        year = data.year;
    }

    const countDayInMonth: number = new Date(year, month + 1, 0).getDate();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth: number = new Date(year, month + 1, 0).getDay();

    const countEmptyCeilForward: number =
        firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const countEmptyCeilLatest: number =
        6 - (lastDayOfMonth === 0 ? 6 : lastDayOfMonth - 1);

    for (let i = 1; i <= countEmptyCeilForward; i++) {
        calendarDays.push('');
    }

    for (let i = 1; i <= countDayInMonth; i++) {
        calendarDays.push(i);
    }

    for (let i = 1; i <= countEmptyCeilLatest; i++) {
        calendarDays.push('');
    }

    return {
        month,
        year,
        calendarDays,
    };
}
