export interface NavigationItem {
    name: string;
    href: string;
    id: number;
}

export const navigationListBase: NavigationItem[] = [
    { name: 'Тренировки', href: '/workouts', id: 1 },
];

export const navigationListAuthUser: NavigationItem[] = [
    ...navigationListBase,
    { name: 'Создать тренировку', href: '/workout', id: 3 },
];

export const navigationListAdmin: NavigationItem[] = [
    ...navigationListAuthUser,
    { name: 'Админ', href: '/users', id: 2 },
];
