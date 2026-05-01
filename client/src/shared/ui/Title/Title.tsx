import type { TitleProps } from './type';

export const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <h2 className="text-center py-1 sm:p-2 text-2xl/9 font-bold tracking-tight">
            {children}
        </h2>
    );
};
