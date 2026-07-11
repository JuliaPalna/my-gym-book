import { Button } from '../../../../shared';

export const BurgerMenu = ({
    onOpen,
}: {
    onOpen: () => void;
}): React.JSX.Element => {
    return (
        <div className="block sm:hidden relative">
            <Button variant="link" onClick={onOpen}>
                <div className="relative size-6">
                    <span
                        className="absolute left-0 w-full h-0.5
                    bg-brand-border-dark top-0"
                    ></span>
                    <span
                        className="absolute left-0 w-full h-0.5
                    bg-brand-border-dark top-1/2 -translate-y-1/2"
                    ></span>
                    <span
                        className="absolute left-0 w-full h-0.5
                    bg-brand-border-dark top-full -translate-y-full"
                    ></span>
                </div>
            </Button>
        </div>
    );
};
