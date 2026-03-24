export interface CalendarProps {
    period: {
        month: number;
        year: number;
    };
    onChange: (newPeriod: { month: number; year: number }) => void;
}

export type calendarCellsProps = (
    | ''
    | {
          hasWorkout: boolean;
          day: number;
      }
)[];
