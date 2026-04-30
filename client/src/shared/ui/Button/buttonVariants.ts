import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    `flex justify-center items-center w-full px-3 py-1.5
    font-semibold cursor-pointer transition-all`,
    {
        variants: {
            variant: {
                base: `text-white bg-teal-800 hover:bg-teal-800/70
                disabled:bg-neutral-400`,
                link: `bg-white `,
                selector: `text-neutral-700 bg-neutral-200
                    hover:bg-neutral-300 hover:scale-105
                    aria-pressed:bg-teal-600 aria-pressed:text-white`,
            },
            size: {
                sm: 'px-2 py-1 text-sm',
                md: 'px-3 py-1.5 text-base',
            },
        },
        defaultVariants: { variant: 'base', size: 'md' },
    },
);
