import type { DaysData, PeriodProps } from '../type';
import { checkValidPeriod } from '../../../utils/checkValidPeriod';
import { generateCalendarPadding } from './generateCalendarPadding';
import { generateMonthDays } from './generateMonthDays';
import { dayjs } from '../../../utils';

export function getCalendar(period: PeriodProps): (DaysData | null)[] {
    if (!checkValidPeriod(period)) {
        return [];
    }

    const firstDayOfMonth: number = dayjs()
        .year(period.year)
        .month(period.month - 1)
        .startOf('month')
        .day();

    const lastDayOfMonth: number = dayjs()
        .year(period.year)
        .month(period.month - 1)
        .endOf('month')
        .day();

    const calculateDays = (day: number): number => (day === 0 ? 6 : day - 1);
    const countEmptyForward: number = calculateDays(firstDayOfMonth);
    const countEmptyAfter: number = 6 - calculateDays(lastDayOfMonth);

    const paddingForward: null[] = generateCalendarPadding(countEmptyForward);
    const paddingAfter: null[] = generateCalendarPadding(countEmptyAfter);
    const monthDays: DaysData[] = generateMonthDays(period);

    const cells: (DaysData | null)[] = [
        ...paddingForward,
        ...monthDays,
        ...paddingAfter,
    ];

    return cells;
}
