interface GetCalendarCellsProps {
    month: number;
    year: number;
}

interface CalendarCell {
    fullDate: string;
    day: number;
}

export function getCellsListForCalendar({
    month,
    year,
}: GetCalendarCellsProps): (CalendarCell | undefined | '')[] {
    const cellsList: (CalendarCell | undefined | '')[] = [];

    if (!month || !year || isNaN(month) || isNaN(year)) {
        return cellsList;
    }

    const countDaysInMonth: number = new Date(year, month, 0).getDate();
    const firstDayOfMonth: number = new Date(year, month - 1, 1).getDay();
    const lastDayOfMonth: number = new Date(year, month, 0).getDay();

    const countEmptyCellsForward: number =
        firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const countEmptyCellsAfter: number =
        6 - (lastDayOfMonth === 0 ? 6 : lastDayOfMonth - 1);

    for (let i = 1; i <= countEmptyCellsForward; i++) {
        cellsList.push('');
    }

    for (let i = 1; i <= countDaysInMonth; i++) {
        cellsList.push({
            fullDate: `${year}-${String(month).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
            day: i,
        });
    }

    for (let i = 1; i <= countEmptyCellsAfter; i++) {
        cellsList.push('');
    }

    return cellsList;
}
