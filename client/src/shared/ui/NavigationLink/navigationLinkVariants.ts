import { cva } from 'class-variance-authority';

export const navigationLinkVariants = cva(
    `relative inline-block font-semibold py-link-y text-nowrap transition-colors`,
    {
        variants: {
            variant: {
                default: 'hover:scale-x-110 animate-transform',
                modal: 'py-3 px-6 w-full',
                header: `text-center before:content-[""] before:absolute
                    before:-bottom-0.5 before:inset-x-0 before:h-0.5
                    before:animate-transform`,
            },
        },

        defaultVariants: { variant: 'default' },
    },
);
