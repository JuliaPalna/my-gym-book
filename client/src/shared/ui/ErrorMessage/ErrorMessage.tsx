export const ErrorMessage = ({
    children,
}: {
    children: string;
}): React.JSX.Element => {
    return <p className="text-status-error font-light text-sm">{children}</p>;
};
