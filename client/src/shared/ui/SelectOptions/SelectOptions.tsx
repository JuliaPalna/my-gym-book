import type { SelectOptionsProps } from './type';
import { Button } from '../Button';

export const SelectOptions: React.FC<SelectOptionsProps> = ({
    options,
    value,
    onChange,
}) => {
    return (
        <ul className="flex flex-row flex-wrap justify-stretch gap-1 box-border">
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
