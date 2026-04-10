export type PeriodProps = { month: number; year: number };
export type FullDateProps = { date: number; month: number; year: number };

export interface CalendarProps {
    period: PeriodProps;
    onChangePeriod: (newPeriod: PeriodProps) => void;
}

export interface CellData {
    fullDate: string;
    day: number;
}

export interface CalendarCell extends CellData {
    hasWorkout: boolean;
}
