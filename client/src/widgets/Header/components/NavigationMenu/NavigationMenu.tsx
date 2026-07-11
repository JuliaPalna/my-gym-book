import type { NavigationItem } from '../../constants';
import { NavigationLink } from '../../../../shared';

export const NavigationMenu = ({
    list,
}: {
    list: NavigationItem[];
}): React.JSX.Element => {
    return (
        <nav>
            <ul className="flex-between flex-nowrap gap-list">
                {list.map((item) => (
                    <li key={item.id}>
                        <NavigationLink href={item.href} variant="header">
                            {item.name}
                        </NavigationLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
