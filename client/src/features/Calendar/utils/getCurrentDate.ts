import type { PeriodProps } from '../type';

export function getCurrentDate(period: PeriodProps): Date {
    return new Date(period.year, period.month - 1, 1);
}
