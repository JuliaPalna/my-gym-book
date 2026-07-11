export const OverlayShading = ({
    onCloseModule,
}: {
    onCloseModule: () => void;
}): React.JSX.Element => {
    return (
        <div
            className="fixed inset-0 bg-brand-overlay z-overlay"
            onClick={onCloseModule}
        />
    );
};
