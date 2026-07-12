import GrowthAnalytic from '../../../app/assets/growthAnalytic.svg?react';

export const features: {
    id: string;
    name: string;
    description: string;
    icon: React.JSX.Element;
}[] = [
    {
        id: 'calc',
        name: 'Календарь',
        description:
            'Отмечай дни тренировок и следи за своей регулярностью. Наглядный календарь поможет выработать привычку и не пропустить ни одного занятия.',
        icon: <GrowthAnalytic />,
    },
    {
        id: 'analytic',
        name: 'Аналитика',
        description:
            'Отслеживай свой прогресс с помощью графиков и статистики. Анализируй частоту и типы тренировок, чтобы видеть реальные результаты.',
        icon: <GrowthAnalytic />,
    },
    {
        id: 'timer',
        name: 'Таймер',
        description:
            'Засекай время выполнения тренировок. Встроенный таймер поможет держать темп и не отвлекаться на сторонние приложения.',
        icon: <GrowthAnalytic />,
    },
];
