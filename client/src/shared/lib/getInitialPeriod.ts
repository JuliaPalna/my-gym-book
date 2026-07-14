import type { PeriodProps } from '../../features';
import { dayjs } from '../lib';

export function getInitialPeriod(): PeriodProps {
    const today = dayjs();

    return {
        year: today.year(),
        month: today.month() + 1,
    };
}
