import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';
import { authorizationAction } from '../entities';

export const useApp = () => {
    const dispatch = useDispatch<AppDispatch>();

    useLayoutEffect(() => {
        const data: string | null = sessionStorage.getItem('authData');

        if (data) {
            try {
                const authorizedUserData = JSON.parse(data);

                dispatch(authorizationAction(authorizedUserData));
            } catch {
                sessionStorage.removeItem('authData');
            }
        }
    }, [dispatch]);
};
