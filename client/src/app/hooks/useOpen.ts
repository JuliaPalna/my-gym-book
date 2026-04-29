import { useState } from 'react';

export const useOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

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
