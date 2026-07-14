import type { DaysData } from '../type';

export function markActiveDays({
    activeDays,
    cells,
}: {
    activeDays: Set<string>;
    cells: (DaysData | null)[];
}): (DaysData | null)[] {
    const cellsWithActiveDay: (DaysData | null)[] = cells.map((cell) => {
        if (!cell) {
            return cell;
        }

        return {
            ...cell,
            hasWorkout: activeDays.has(cell.fullDate),
        };
    });

    return cellsWithActiveDay;
}
