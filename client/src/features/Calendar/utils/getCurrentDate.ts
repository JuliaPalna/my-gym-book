export function getCurrentDate() {
    const day: Date = new Date();
    const month: number = day.getMonth();
    const year: number = day.getFullYear();

    return { day, month, year };
}
