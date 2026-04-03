import type { JSX } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import type { WorkoutDurationTypesPieChartProps } from './type';

ChartJS.register(ArcElement, Tooltip, Legend);

export function WorkoutDurationTypesPieChart({
    dataDuration,
}: WorkoutDurationTypesPieChartProps): JSX.Element {
    const data = {
        labels: dataDuration.types,
        datasets: [
            {
                label: 'Минуты',
                data: dataDuration.minutes,
                backgroundColor: [
                    'rgba(250,204,21, 0.3)',
                    'rgba(34,211,238, 0.3)',
                    'rgba(167,139,250, 0.3)',
                    'rgba(251,14,60, 0.3)',
                    'rgba(163,230,53, 0.3)',
                    'rgba(244,144,182, 0.3)',
                ],
                borderColor: [
                    'rgba(250,204,21)',
                    'rgba(34,211,238)',
                    'rgba(167,139,250)',
                    'rgba(251,14,60)',
                    'rgba(163,230,53)',
                    'rgba(244,144,182)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    font: { size: 13 },
                    color: 'rgb(74,85,101)',
                    padding: 16,
                },
            },
            title: {
                display: true,
                text: 'Распределение нагрузки по типам',
                font: {
                    size: 16,
                },
                color: 'rgb(74,85,101)',
            },
        },
    };

    return <Pie data={data} options={options} />;
}
