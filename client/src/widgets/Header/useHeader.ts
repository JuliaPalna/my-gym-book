import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    authorizedUserSelector,
    logoutAction,
    type AppDispatch,
} from '../../entities';
import { TYPE_ROLE_USER } from '../../app/constants';
import {
    navigationListBase,
    navigationListAuthUser,
    navigationListAdmin,
} from './constants';

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
            sessionStorage.removeItem('auth');
            navigate('/');
        } catch {
            console.error('Ошибка. повторите запрос позже');
        }
    };

    return {
        navigationList,
        isAuthorizedUser,
        onLogout,
    };
};
