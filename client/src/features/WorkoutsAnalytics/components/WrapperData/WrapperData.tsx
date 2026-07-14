export const WrapperData = ({
    data,
    description,
}: {
    data: string | number;
    description: string;
}): React.JSX.Element => {
    return (
        <div className="flex-1 flex-column gap-small sm:gap-list">
            <span className="font-bold text-xl sm:text-3xl">{data}</span>

            <span>{description}</span>
        </div>
    );
};
