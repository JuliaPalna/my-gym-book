export function getCurrentMonthYear(): { month: number; year: number } {
    const day: Date = new Date();
    const year: number = day.getFullYear();
    const month: number = day.getMonth() + 1;

    return { year, month };
}
