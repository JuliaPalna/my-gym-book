import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../app/hooks';
import {
    authorizedUserSelector,
    setWorkoutsAction,
    type AppDispatch,
} from '../../entities';
import type { PeriodProps } from '../../features';
import { checkValidPeriod, getInitialPeriod } from '../../utils';
import { TYPE_ROLE_USER } from '../../app/constants';

export const useWorkoutsPage = () => {
    const authUser = useSelector(authorizedUserSelector);
    const [selectedPeriod, setSelectedPeriod] =
        useState<PeriodProps>(getInitialPeriod());

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const isAuthorizedUser =
        authUser.roleId === TYPE_ROLE_USER.USER ||
        authUser.roleId === TYPE_ROLE_USER.ADMIN;

    const [error, isLoading, fetchWorkouts] = useFetch({
        callback: async () => {
            await dispatch(setWorkoutsAction(selectedPeriod));
        },
    });

    useEffect(() => {
        fetchWorkouts();
    }, [selectedPeriod]);

    const onGoToCreationForm = (): void => {
        navigate('/workout');
    };

    const onGoBackMonth = (): void => {
        if (!checkValidPeriod(selectedPeriod)) {
            return;
        }

        if (selectedPeriod.month === 1) {
            setSelectedPeriod({ year: selectedPeriod.year - 1, month: 12 });
            return;
        }

        setSelectedPeriod({
            ...selectedPeriod,
            month: selectedPeriod.month - 1,
        });
    };

    const onGoForwardMonth = (): void => {
        if (!checkValidPeriod(selectedPeriod)) {
            return;
        }

        if (selectedPeriod.month === 12) {
            setSelectedPeriod({ year: selectedPeriod.year + 1, month: 1 });
            return;
        }

        setSelectedPeriod({
            ...selectedPeriod,
            month: selectedPeriod.month + 1,
        });
    };

    return {
        isAuthorizedUser,
        selectedPeriod,
        error,
        isLoading,
        onGoToCreationForm,
        onGoForwardMonth,
        onGoBackMonth,
    };
};
