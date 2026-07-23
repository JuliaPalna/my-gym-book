import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authorizedUserSelector, logoutAction } from '../../entities';
import { TYPE_ROLE_USER } from '../../app/constants';
import {
    navigationListBase,
    navigationListAuthUser,
    navigationListAdmin,
} from './constants';
import type { AppDispatch } from '../../app/store';

export const useHeader = () => {
    const data = useSelector(authorizedUserSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const isAdmin = data.roleId === TYPE_ROLE_USER.ADMIN;
    const isAuthorizedUser = data.roleId === TYPE_ROLE_USER.USER || isAdmin;

    let navigationList = navigationListBase;

    if (isAdmin) {
        navigationList = navigationListAdmin;
    } else if (isAuthorizedUser) {
        navigationList = navigationListAuthUser;
    }

    const onLogout = async () => {
        try {
            await dispatch(logoutAction());
        } finally {
            sessionStorage.removeItem('authData');
            sessionStorage.removeItem('timerState');
            navigate('/');
        }
    };

    return {
        navigationList,
        isAuthorizedUser,
        onLogout,
    };
};
