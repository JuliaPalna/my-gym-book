export interface ButtonProps {
    disabled?: boolean;
    children: React.ReactElement | string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    variant?: 'link' | 'selector' | 'base';
    size?: 'sm' | 'md';
}
