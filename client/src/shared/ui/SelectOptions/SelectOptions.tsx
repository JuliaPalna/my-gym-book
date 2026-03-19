import type { JSX } from 'react';
import Select from 'react-select';
import type { SelectOptionsProps } from './type';

export function SelectOptions({
    options,
    ...props
}: SelectOptionsProps): JSX.Element {
    return <Select options={options} isMulti {...props} />;
}
