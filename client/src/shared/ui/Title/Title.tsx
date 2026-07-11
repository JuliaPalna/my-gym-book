export const Title = ({
    children,
}: {
    children: React.ReactNode;
}): React.JSX.Element => {
    return (
        <h2 className="text-center py-1 sm:p-2 text-2xl/9 font-bold tracking-tight">
            {children}
        </h2>
    );
};
