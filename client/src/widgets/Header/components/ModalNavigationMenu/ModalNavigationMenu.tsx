import { Button, OverlayShading, NavigationLink } from '../../../../shared';
import type { NavigationItem } from '../../constants';

interface NavigationMenuProps {
    list: NavigationItem[];
    isOpen: boolean;
    onClose: () => void;
}

export const ModalNavigationMenu = ({
    list,
    isOpen,
    onClose,
}: NavigationMenuProps): React.JSX.Element => {
    return (
        <>
            {isOpen && <OverlayShading onCloseModule={onClose} />}

            <div
                className={`fixed top-0 bottom-0 left-0 max-w-xs
                bg-brand-bg z-modal sm:hidden transition-transform
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="ml-3 mt-3 mb-8">
                    <Button variant="link" onClick={onClose}>
                        <span className="relative size-6">
                            <span className="absolute inset-x-0 top-1/2 h-0.5 bg-brand-border-dark -translate-y-1/2 rotate-45"></span>
                            <span className="absolute inset-x-0 top-1/2 h-0.5 bg-brand-border-dark -translate-y-1/2 -rotate-45"></span>
                        </span>
                    </Button>
                </div>

                <nav onClick={onClose}>
                    <ul className="flex-column">
                        {list.map((item) => {
                            return (
                                <li key={item.id}>
                                    <NavigationLink
                                        href={item.href}
                                        variant="modal"
                                    >
                                        {item.name}
                                    </NavigationLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
};
