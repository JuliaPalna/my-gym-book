export type OptionType = { [key: string]: string | number };
export type OptionsType = OptionType[];

export interface GroupType {
    label: string;
    options: OptionsType;
}

export type ValueType = OptionType | OptionsType | null | undefined;

export interface SelectOptionsProps {
    options: OptionsType;
    value: unknown;
    name: string | undefined;
    onChange: () => void;
    onBlur: () => void;
}
