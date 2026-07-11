import { OverlayShading } from '../OverlayShading';

export const Modal = ({
    children,
    onClose,
}: {
    children: React.ReactNode;
    onClose: () => void;
}): React.JSX.Element => {
    return (
        <>
            <OverlayShading onCloseModule={onClose} />

            <div
                className="fixed z-modal px-6 py-8 max-w-md
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex-column bg-brand-bg"
            >
                {children}
            </div>
        </>
    );
};
