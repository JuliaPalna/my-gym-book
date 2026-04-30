import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    checkValidPeriod,
    formatDateForDisplay,
    getCalendarCellsWithActiveDays,
} from './utils';
import { workoutsSelector } from '../../entities';
import type { CalendarCell, CalendarProps } from './type';
import { getCurrentDate } from './utils/getCurrentDate';

export const useCalendar = ({ period, onChangePeriod }: CalendarProps) => {
    const { workouts } = useSelector(workoutsSelector);
    const navigate = useNavigate();

    const isValidPeriod: boolean = checkValidPeriod(period);

    const currentDate = getCurrentDate(period);

    const displayMonthYear: string = isNaN(currentDate.getTime())
        ? 'Некорректная дата'
        : formatDateForDisplay(currentDate);

    const calendarCells: (CalendarCell | '')[] = getCalendarCellsWithActiveDays(
        { period, workouts },
    );

    const onOpenWorkoutsByDay = (): void => {
        // TODO: заглушка id
        navigate(`/workouts/1775848251961`);
    };

    const onGoBack = (): void => {
        if (!isValidPeriod) {
            return;
        }

        if (period.month === 1) {
            onChangePeriod({ year: period.year - 1, month: 12 });
            return;
        }

        onChangePeriod({ ...period, month: period.month - 1 });
    };

    const onGoForward = (): void => {
        if (!isValidPeriod) {
            return;
        }

        if (period.month === 12) {
            onChangePeriod({ year: period.year + 1, month: 1 });
            return;
        }

        onChangePeriod({ ...period, month: period.month + 1 });
    };

    return {
        displayMonthYear,
        calendarCells,
        onGoBack,
        onGoForward,
        onOpenWorkoutsByDay,
    };
};
