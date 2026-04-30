import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import type {
    UpdateWorkoutAction,
    Workout,
    WorkoutActionProps,
} from '../types';
import { updateWorkout } from '../api';

export const updateWorkoutAction = ({
    id,
    data,
}: {
    id: string;
    data: WorkoutActionProps;
}) => {
    return async (dispatch: Dispatch<UpdateWorkoutAction>): Promise<void> => {
        const updatedWorkout: Workout = await updateWorkout({ id, data });

        dispatch({
            type: ACTION_TYPE.UPDATE_WORKOUT,
            payload: updatedWorkout,
        });
    };
};
