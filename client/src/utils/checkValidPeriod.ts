import type { PeriodProps } from '../features/Calendar/type';

export function checkValidPeriod({ year, month }: PeriodProps): boolean {
    return (
        !isNaN(year) &&
        !isNaN(month) &&
        Number.isInteger(year) &&
        Number.isInteger(month) &&
        month >= 1 &&
        month <= 12
    );
}
