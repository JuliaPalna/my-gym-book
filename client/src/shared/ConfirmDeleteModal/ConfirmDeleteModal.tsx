import { Button, ErrorMessage, Loader, Modal } from '../ui';
import type { ConfirmDeleteModalProps } from './type';

export const ConfirmDeleteModal = ({
    message,
    isConfirm = false,
    error = null,
    onConfirm,
    onCancel,
}: ConfirmDeleteModalProps): React.JSX.Element => {
    return (
        <>
            <Modal onClose={onCancel}>
                <>
                    <span className="text-center pb-5">{message}</span>

                    <div className="flex-column sm:flex-row gap-form">
                        <Button onClick={onConfirm} disabled={isConfirm}>
                            {isConfirm ? <Loader /> : 'Подтвердить'}
                        </Button>

                        <Button onClick={onCancel}>Отмена</Button>
                    </div>

                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </>
            </Modal>
        </>
    );
};
