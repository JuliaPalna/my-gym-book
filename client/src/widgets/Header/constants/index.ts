export interface NavigationItem {
    name: string;
    href: string;
    id: number;
}

export const navigationListBase: NavigationItem[] = [
    { name: 'Главная', href: '/', id: 0 },
];

export const navigationListAuthUser: NavigationItem[] = [
    ...navigationListBase,
    { name: 'Тренировки', href: '/workouts', id: 1 },
    { name: 'Создать тренировку', href: '/workout', id: 3 },
];

export const navigationListAdmin: NavigationItem[] = [
    ...navigationListAuthUser,
    { name: 'Админ', href: '/users', id: 2 },
];
