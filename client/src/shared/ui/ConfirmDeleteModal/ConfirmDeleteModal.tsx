import { Button } from '../Button';
import { OverlayShading } from '../OverlayShading';
import type { ConfirmDeleteModalProps } from './type';

export const ConfirmDeleteModal = ({
    message,
    onConfirm,
    onCancel,
}: ConfirmDeleteModalProps) => {
    return (
        <>
            <OverlayShading onCloseModule={onCancel} />

            <div
                className="fixed  z-50 px-6 py-8 max-w-md
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex flex-col bg-white"
            >
                <span className="text-center pb-5">{message}</span>

                <div className="flex flex-col sm:flex-row gap-2">
                    <Button onClick={onConfirm}>Подтвердить</Button>
                    <Button onClick={onCancel}>Отмена</Button>
                </div>
            </div>
        </>
    );
};
