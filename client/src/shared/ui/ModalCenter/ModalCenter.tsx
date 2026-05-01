import { OverlayShading } from '../OverlayShading';

export interface ModalCenterProps {
    children: React.ReactElement | string;
    onClose: () => void;
}

export const ModalCenter: React.FC<ModalCenterProps> = ({
    children,
    onClose,
}) => {
    return (
        <>
            <OverlayShading onCloseModule={onClose} />

            <div
                className="fixed  z-50 px-6 py-8 max-w-md
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex flex-col bg-white"
            >
                {children}
            </div>
        </>
    );
};
