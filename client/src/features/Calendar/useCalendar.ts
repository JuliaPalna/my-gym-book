import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatDateForDisplay, getCellsListForCalendar } from './utils';
import type { CalendarCellsProps, CalendarProps } from './type';
import { workoutsSelector, type WorkoutsStateProps } from '../../entities';

export const useCalendar = ({ period, onChange }: CalendarProps) => {
    const navigate = useNavigate();
    const workoutsData: WorkoutsStateProps = useSelector(workoutsSelector);

    const { activityDays } = workoutsData;
    const [year, month] = period.split('-').map((item) => Number(item));

    const isValid = !isNaN(year) && !isNaN(month) && month >= 1 && month <= 12;

    const displayMonthYear = useMemo(() => {
        const formatDate = formatDateForDisplay(period);

        if (!isValid || !formatDate) {
            return 'Некорректная дата';
        }

        return formatDate;
    }, [period, isValid]);

    const calendarCells = useMemo(() => {
        if (!isValid) {
            return [];
        }

        const initialCellsListCalendar = getCellsListForCalendar({
            year,
            month,
        });

        const cellsListCalendarWithActiveDay: CalendarCellsProps =
            initialCellsListCalendar.map((cell) => {
                if (!cell || cell.fullDate === null) {
                    return '';
                }

                const isActive = activityDays.find((item) => {
                    const date = new Date(item.createdAt)
                        .toISOString()
                        .split('T')[0];

                    return date === cell.fullDate;
                });

                return {
                    ...cell,
                    hasWorkout: !!isActive,
                };
            });

        return cellsListCalendarWithActiveDay;
    }, [year, month, isValid, activityDays]);

    const onGoBack = useCallback((): void => {
        if (!isValid) {
            return;
        }

        if (month === 1) {
            onChange(`${year - 1}-12`);
            return;
        }

        onChange(`${year}-${month - 1}`);
    }, [year, month, onChange, isValid]);

    const onGoForward = useCallback((): void => {
        if (!isValid) {
            return;
        }

        if (month === 12) {
            onChange(`${year + 1}-01`);
            return;
        }

        onChange(`${year}-${month + 1}`);
    }, [year, month, onChange, isValid]);

    const onDayClick = () => {
        navigate(`/workouts/1`);
    };

    return {
        displayMonthYear,
        calendarCells,
        onGoBack,
        onGoForward,
        onDayClick,
    };
};
