import type { WorkoutItem } from '../../../../entities';
import { useListWorkoutsByDay } from './useListWorkoutsByDay';

export const ListWorkoutsByDay = ({
    workouts,
}: {
    workouts: WorkoutItem[];
}): React.JSX.Element => {
    const { getDate, getTime, onOpenWorkoutDetails } = useListWorkoutsByDay();

    if (workouts.length === 0) {
        return <></>;
    }

    return (
        <>
            <p className="py-1">Тренировки за</p>
            <p className="py-1">{getDate(workouts[0].startedAt)}:</p>

            <ul className="flex-column gap-list cursor-pointer">
                {workouts.map((workout, index) => {
                    return (
                        <li
                            key={workout.id}
                            className="py-1 border-t-2 border-t-brand-border"
                            onClick={() => onOpenWorkoutDetails(workout.id)}
                        >
                            <span>{index + 1}. </span>

                            <span>{getTime(workout.startedAt)}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
