export const transformedOptionsForSelect = ({
    options,
}: {
    options: {
        id: string;
        name: string;
    }[];
}): {
    value: string;
    label: string;
}[] => {
    return options.map(({ id, name }) => {
        return { value: id, label: name };
    });
};
