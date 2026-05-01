interface ErrorMessageProps {
    children: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
    return <p className="text-red-800 font-light text-sm">{children}</p>;
};
