import { useState } from 'react';

export const useOpenNavigationMenu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const onToggleMenu = () => setIsOpenMenu(!isOpenMenu);

    return {
        isOpenMenu,
        onToggleMenu,
    };
};
