import type { JSX } from 'react';
import { Button } from '../../../../shared';

export const BurgerMenu = ({ onOpen }: { onOpen: () => void }): JSX.Element => {
    return (
        <div className="block sm:hidden relative size-6 mx-3">
            <Button variant="link" onClick={onOpen}>
                <div
                    className='min-h-6 min-w-6 border-y-2 border-neutral-900
                        before:content-[""] before:absolute before:inset-x-0
                        before:top-[calc(50%-1px)] before:border-b-2
                        before:border-neutral-900'
                ></div>
            </Button>
        </div>
    );
};
