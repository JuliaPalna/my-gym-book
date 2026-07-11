import type { DaysData, PeriodProps } from '../type';
import { dayjs } from '../../../shared';

export function generateMonthDays({ year, month }: PeriodProps): DaysData[] {
    const countDays: number = dayjs()
        .year(year)
        .month(month - 1)
        .daysInMonth();

    return Array.from({ length: countDays }, (_, i) => ({
        fullDate: dayjs()
            .year(year)
            .month(month - 1)
            .date(i + 1)
            .format('YYYY-MM-DD'),
        day: i + 1,
        hasWorkout: false,
    }));
}
