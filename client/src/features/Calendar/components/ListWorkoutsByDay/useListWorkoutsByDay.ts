import { useNavigate } from 'react-router-dom';
import { formatDateHHmm, formatDateYYYYMMDD } from '../../../../shared';

export const useListWorkoutsByDay = () => {
    const navigate = useNavigate();

    const getDate = (timestamp: number): string =>
        formatDateYYYYMMDD(timestamp);

    const getTime = (timestamp: number): string => formatDateHHmm(timestamp);

    const onOpenWorkoutDetails = (id: string) => {
        navigate(`/workouts/${id}`);
    };

    return {
        getDate,
        getTime,
        onOpenWorkoutDetails,
    };
};
