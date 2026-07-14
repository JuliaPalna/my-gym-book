import type { TypeWorkout } from '../../entities';

export interface SelectOptionsProps {
    options: TypeWorkout[];
    value: string[];
    onChange: (data: string[]) => void;
}
