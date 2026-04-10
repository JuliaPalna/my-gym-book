import type { Workout } from '../../../entities';
import type { CalendarCell, PeriodProps } from '../type';
import { checkValidPeriod } from './checkValidPeriod';
import { getCellsCalendarForMonth } from './getCellsCalendarForMonth';

export const getCalendarCellsWithActiveDays = ({
    period,
    workouts,
}: {
    period: PeriodProps;
    workouts: Workout[];
}): (CalendarCell | '')[] => {
    if (!checkValidPeriod(period)) {
        return [];
    }

    const cells = getCellsCalendarForMonth(period);

    const workoutDate: string[] = workouts.map((workout) => {
        return new Date(workout.startedAt).toISOString().split('T')[0];
    });

    const activeDays = new Set(workoutDate);

    const cellsWithActiveDay: (CalendarCell | '')[] = cells.map(
        (cell): CalendarCell | '' => {
            if (cell === '') {
                return cell;
            }

            return {
                ...cell,
                hasWorkout: activeDays.has(cell.fullDate),
            };
        },
    );

    return cellsWithActiveDay;
};
