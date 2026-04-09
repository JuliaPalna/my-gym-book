import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setUsersAction,
    usersSelector,
    type AppDispatch,
} from '../../entities';
import { useFetch } from '../../app/hooks';

export const useUsersPage = () => {
    const users = useSelector(usersSelector);
    const dispatch = useDispatch<AppDispatch>();

    const [error, isLoading, fetchUsers] = useFetch({
        callback: async () => {
            await dispatch(setUsersAction());
        },
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users,
        isLoading,
        error,
    };
};
