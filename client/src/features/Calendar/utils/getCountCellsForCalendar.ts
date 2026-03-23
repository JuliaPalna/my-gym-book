interface GetCalendarCellsProps {
    month: number;
    year: number;
}

export function getCountCellsForCalendar({
    month,
    year,
}: GetCalendarCellsProps): (number | '' | undefined)[] {
    const calendarDays: (number | '' | undefined)[] = [];

    if (!month || !year || isNaN(month) || isNaN(year)) {
        return calendarDays;
    }

    const countDayInMonth: number = new Date(year, month, 0).getDate();
    const firstDayOfMonth: number = new Date(year, month - 1, 1).getDay();
    const lastDayOfMonth: number = new Date(year, month, 0).getDay();

    const countEmptyCeilForward: number =
        firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const countEmptyCellsAfter: number =
        6 - (lastDayOfMonth === 0 ? 6 : lastDayOfMonth - 1);

    for (let i = 1; i <= countEmptyCeilForward; i++) {
        calendarDays.push('');
    }

    for (let i = 1; i <= countDayInMonth; i++) {
        calendarDays.push(i);
    }

    for (let i = 1; i <= countEmptyCellsAfter; i++) {
        calendarDays.push('');
    }

    return calendarDays;
}
