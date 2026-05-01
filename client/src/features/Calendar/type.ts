export type PeriodProps = { month: number; year: number };

export interface CalendarProps {
    period: PeriodProps;
    onGoForwardMonth: () => void;
    onGoBackMonth: () => void;
}

export interface DaysData {
    fullDate: string;
    day: number;
    hasWorkout: boolean;
}
