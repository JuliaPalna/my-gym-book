export interface ButtonProps {
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    variant?: 'link' | 'selector' | 'base';
    size?: 'sm' | 'md';
}
