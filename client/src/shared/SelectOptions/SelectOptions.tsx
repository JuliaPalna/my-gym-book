import type { SelectOptionsProps } from './type';
import { Button } from '../ui/Button';

export const SelectOptions = ({
    options,
    value,
    onChange,
}: SelectOptionsProps): React.JSX.Element => {
    return (
        <ul className="flex-stretch flex-wrap gap-list">
            {options.map((option) => {
                const isSelected = value?.includes(option.id);

                return (
                    <li key={option.id} id={option.id}>
                        <Button
                            variant="selector"
                            size="sm"
                            aria-pressed={isSelected}
                            onClick={() => {
                                const newValue = isSelected
                                    ? value.filter((item) => item !== option.id)
                                    : [...value, option.id];
                                onChange(newValue);
                            }}
                        >
                            {option.nameRu}
                        </Button>
                    </li>
                );
            })}
        </ul>
    );
};
