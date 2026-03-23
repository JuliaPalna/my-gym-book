import { formatMonth } from './formatMonth';

export function getCurrentMonthYear(): string {
    const day: Date = new Date();
    const year: number = day.getFullYear();
    const month: number = day.getMonth() + 1;

    return `${year}-${formatMonth(month)}`;
}
