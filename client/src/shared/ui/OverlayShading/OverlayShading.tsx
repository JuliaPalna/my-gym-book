export const OverlayShading = ({
    onCloseModule,
}: {
    onCloseModule: () => void;
}): React.JSX.Element => {
    return (
        <div
            className="fixed inset-0 bg-neutral-800/40 z-40"
            onClick={onCloseModule}
        />
    );
};
