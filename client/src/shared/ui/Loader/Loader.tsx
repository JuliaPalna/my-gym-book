export const Loader = (): React.JSX.Element => {
    return (
        <div>
            <div
                className="rounded-full size-6 flex-center
                bg-gradient-to-t from-brand-primary via-brand-primary-hover to-brand-primary-active
                animate-spin"
            >
                <div className="bg-brand-bg rounded-full size-4"></div>
            </div>
        </div>
    );
};
