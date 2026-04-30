import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchRoles,
    setUsersAction,
    usersSelector,
    type AppDispatch,
    type RoleUser,
} from '../../entities';
import { useFetch } from '../../app/hooks';

export const useUsersPage = () => {
    const users = useSelector(usersSelector);
    const [userRoles, setUserRoles] = useState<RoleUser[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    const [error, isLoading, fetchUsers] = useFetch({
        callback: async () => {
            const loadedRoles = await fetchRoles();
            await dispatch(setUsersAction());
            setUserRoles(loadedRoles);
        },
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        userRoles,
        users,
        isLoading,
        error,
    };
};
