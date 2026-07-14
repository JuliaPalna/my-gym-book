import { useState } from 'react';

interface UseOpenResult {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useOpen = (): UseOpenResult => {
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
