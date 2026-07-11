import { dayjs } from '../lib';
import type { PeriodProps } from '../../features';

export function getMonthRange({ year, month }: PeriodProps): {
    startTs: number;
    endTs: number;
} {
    const timezone: string = getTimezone();

    const base = dayjs.tz(
        `${year}-${String(month).padStart(2, '0')}-01`,
        timezone,
    );

    return {
        startTs: base.startOf('month').utc().valueOf(),
        endTs: base.add(1, 'month').startOf('month').utc().valueOf(),
    };
}

export function getTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function formatDateYYYYMMDD(date: number): string {
    return dayjs(date).format('YYYY-MM-DD');
}

export function formatDateYYYYMMDDTHHmm(date: number): string {
    return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

export function formatDateHHmm(date: number): string {
    return dayjs(date).format('HH:mm');
}

export function getTimestamp(value: string): number {
    return dayjs(value).valueOf();
}

export function getToday(): number {
    return dayjs().valueOf();
}
