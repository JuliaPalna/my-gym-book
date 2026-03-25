import type { WorkoutsStateProps } from '../../../../entities';
import { activityDays, monthStats } from '../../../data';

export const workoutsInitialState: WorkoutsStateProps = {
    activityDays,
    monthStats,
};

// export const workoutsInitialState = {
//     activityDays: [],
//     monthStats: {
//         totalWorkout: 0,
//         averageDurationWorkout: 0,
//     },
// };
