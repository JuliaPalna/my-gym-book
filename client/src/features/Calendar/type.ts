export type MonthYearProps = `${number}-${number}`;
export type FullDateProps = `${number}-${number}-${number}`;

export interface CalendarProps {
    period: MonthYearProps;
    onChange: (newPeriod: MonthYearProps) => void;
}

export type CalendarCellsProps = {
    data:
        | ''
        | {
              hasWorkout: boolean;
              //   fullDate: FullDateProps;
              fullDate: string;
              day: number;
          };
    id: number;
}[];
