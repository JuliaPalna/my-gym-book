import type { CellData, PeriodProps } from '../type';
import { checkValidPeriod } from './checkValidPeriod';

export function getCellsCalendarForMonth(
    period: PeriodProps,
): (CellData | '')[] {
    const cells: (CellData | '')[] = [];

    if (!checkValidPeriod(period)) {
        return cells;
    }

    const { year, month } = period;
    const countDaysInMonth: number = new Date(year, month, 0).getDate();
    const firstDayOfMonth: number = new Date(year, month - 1, 1).getDay();
    const lastDayOfMonth: number = new Date(year, month, 0).getDay();

    const countEmptyCellsForward: number =
        firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const countEmptyCellsAfter: number =
        6 - (lastDayOfMonth === 0 ? 6 : lastDayOfMonth - 1);

    for (let i = 1; i <= countEmptyCellsForward; i++) {
        cells.push('');
    }

    for (let i = 1; i <= countDaysInMonth; i++) {
        cells.push({
            fullDate: `${year}-${String(month).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
            day: i,
        });
    }

    for (let i = 1; i <= countEmptyCellsAfter; i++) {
        cells.push('');
    }

    return cells;
}
