import type { PeriodProps } from '../../../features';

export const getInitialPeriod = (): PeriodProps => {
    const today: Date = new Date();

    return {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
    };
};
