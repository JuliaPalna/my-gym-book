export const WrapperChart = ({
    children,
    subtitle,
}: {
    children: React.ReactNode;
    subtitle: string;
}): React.JSX.Element => {
    return (
        <div className="flex-1 flex-column gap-small sm:gap-list">
            <p className="text-center py-1">{subtitle}</p>

            {children}
        </div>
    );
};
