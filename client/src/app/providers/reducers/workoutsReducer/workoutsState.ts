import { activityDays, monthStats } from '../../../data';
import type { WorkoutsStateProps } from './type';

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
