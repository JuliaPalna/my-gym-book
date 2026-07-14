export interface ConfirmDeleteModalProps {
    message: string;
    error?: string | null;
    isConfirm?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
