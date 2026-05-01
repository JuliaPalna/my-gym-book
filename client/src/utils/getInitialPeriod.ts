import { dayjs } from './dayjs';
import type { PeriodProps } from '../features';

export function getInitialPeriod(): PeriodProps {
    const today = dayjs();

    return {
        year: today.year(),
        month: today.month() + 1,
    };
}
