import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchRoles,
    setUsersAction,
    usersSelector,
    type RoleUser,
} from '../../entities';
import { useFetch } from '../../app/hooks';
import type { AppDispatch } from '../../app/store';

export const useUsersPage = () => {
    const users = useSelector(usersSelector);
    const [userRoles, setUserRoles] = useState<RoleUser[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    const fetchUsersCallback = useCallback(async () => {
        const loadedRoles = await fetchRoles();

        await dispatch(setUsersAction());
        setUserRoles(loadedRoles);
    }, [dispatch]);

    const [error, isLoading, fetchUsers] = useFetch({
        callback: fetchUsersCallback,
    });

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return {
        userRoles,
        users,
        isLoading,
        error,
    };
};
