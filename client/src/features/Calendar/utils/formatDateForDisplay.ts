import { dayjs } from '../../../shared';
import type { PeriodProps } from '../type';

export function formatDateForDisplay(period: PeriodProps): string {
    return dayjs()
        .year(period.year)
        .month(period.month - 1)
        .format('MMMM YYYY');
}
