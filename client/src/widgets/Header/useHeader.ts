import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { authorizedUserSelector } from '../../entities';

export const useHeader = () => {
    const [isOpenNavigationMenu, setIsOpenNavigationMenu] = useState(false);

    const navigate = useNavigate();
    // const authorizedUser = useSelector(authorizedUserSelector);
    // TODO: заглушка
    const isAuthorizedUser = false;

    const onToggleNavigationMenu = () =>
        setIsOpenNavigationMenu(!isOpenNavigationMenu);

    const onLogout = () => {
        navigate('/');
    };

    return {
        isAuthorizedUser,
        isOpenNavigationMenu,
        onLogout,
        onToggleNavigationMenu,
    };
};
