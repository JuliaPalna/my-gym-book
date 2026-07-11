import { ErrorMessage } from '../ui';
import type { FieldWrapperProps } from './type';

export const FieldWrapper = ({
    error = '',
    htmlFor,
    title,
    children,
}: FieldWrapperProps): React.JSX.Element => {
    return (
        <div className="flex-column min-h-full gap-list">
            <label htmlFor={htmlFor} className="block text-sm/6">
                {title}
            </label>

            {children}

            <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
        </div>
    );
};
