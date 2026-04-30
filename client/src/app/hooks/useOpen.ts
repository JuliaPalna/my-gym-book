import { useState } from 'react';

export const useOpen = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = (): void => {
        setIsOpen(true);
    };

    const onClose = (): void => {
        setIsOpen(false);
    };

    return {
        isOpen,
        onOpen,
        onClose,
    };
};
