interface OverlayShadingProps {
    onCloseModule: () => void;
}

export const OverlayShading: React.FC<OverlayShadingProps> = ({
    onCloseModule,
}) => {
    return (
        <div
            className="fixed inset-0 bg-neutral-800/40 z-40"
            onClick={onCloseModule}
        />
    );
};
