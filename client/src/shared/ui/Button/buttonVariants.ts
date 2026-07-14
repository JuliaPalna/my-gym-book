import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    `flex-center font-semibold cursor-pointer transition-all`,
    {
        variants: {
            variant: {
                base: `w-full text-brand-text-light bg-brand-primary
                hover:bg-brand-primary-hover disabled:bg-brand-disabled`,
                link: `bg-transparent hover:scale-110`,
                selector: `text-brand-border bg-transparent border border-2 border-brand-border
                    hover:border-brand-primary-hover hover:text-brand-primary-hover
                    aria-pressed:bg-brand-primary-active aria-pressed:text-brand-text-light`,
            },
            size: {
                sm: 'px-2 py-1 text-sm',
                md: 'px-3 py-1.5 text-base',
            },
        },
        defaultVariants: { variant: 'base', size: 'md' },
    },
);
