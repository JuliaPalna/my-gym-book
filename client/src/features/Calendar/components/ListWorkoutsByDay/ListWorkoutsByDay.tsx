import type { WorkoutBase } from '../../../../entities';
import { useListWorkoutsByDay } from './useListWorkoutsByDay';

interface ListWorkoutsByDayProps {
    workouts: WorkoutBase[];
}

export const ListWorkoutsByDay: React.FC<ListWorkoutsByDayProps> = ({
    workouts,
}) => {
    const { getDate, getTime, onOpenWorkoutDetails } = useListWorkoutsByDay();

    if (workouts.length === 0) {
        return;
    }

    return (
        <>
            <p className="py-1 text-base">Дата:</p>
            <p className="py-1 text-base">{getDate(workouts[0].startedAt)}</p>

            <ul className="flex flex-col gap-1 text-base cursor-pointer">
                {workouts.map((workout, index) => {
                    return (
                        <li
                            key={workout.id}
                            className="py-1 border-t-2 border-t-neutral-300"
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
