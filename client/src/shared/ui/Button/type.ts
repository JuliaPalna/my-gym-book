export interface ButtonProps {
    disabled?: boolean;
    children: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}
