export const Form = ({
    onSubmit,
    children,
}: {
    onSubmit: React.SubmitEventHandler<HTMLFormElement> | undefined;
    children: React.ReactNode;
}): React.JSX.Element => {
    return (
        <form onSubmit={onSubmit} className="flex-column gap-form">
            {children}
        </form>
    );
};
