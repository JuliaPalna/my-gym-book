import { Button } from '../Button';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { ModalCenter } from '../ModalCenter';
import type { ConfirmDeleteModalProps } from './type';

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
    message,
    isConfirm = false,
    error = null,
    onConfirm,
    onCancel,
}) => {
    return (
        <>
            <ModalCenter onClose={onCancel}>
                <>
                    <span className="text-center pb-5">{message}</span>

                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button onClick={onConfirm} disabled={isConfirm}>
                            {isConfirm ? <Loader /> : 'Подтвердить'}
                        </Button>
                        <Button onClick={onCancel}>Отмена</Button>
                    </div>

                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </>
            </ModalCenter>
        </>
    );
};
