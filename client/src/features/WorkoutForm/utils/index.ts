import { WORKOUT_TAGS } from '../../../app/constants';
import type { Workout } from '../../../entities';
import { timestampToInputValue } from '../../../utils';
import type { InitialValueForm } from '../constants';

export const getWorkoutFormDefaultValues = (
    workout: Workout,
    initialValue: InitialValueForm,
) => ({
    ...initialValue,
    startedAt:
        timestampToInputValue(workout.startedAt) || initialValue.startedAt,
    description: workout.description || initialValue.description,
    durationMinutes: workout.durationMinutes || initialValue.durationMinutes,
    types: !workout?.types
        ? initialValue.types
        : workout?.types.map((type) => {
              return {
                  value: type,
                  label: WORKOUT_TAGS.find((tag) => {
                      return tag.value === type;
                  })?.label,
              };
          }),
});
