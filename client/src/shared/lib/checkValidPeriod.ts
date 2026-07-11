import type { PeriodProps } from '../../features';

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
