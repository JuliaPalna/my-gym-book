import type { JSX } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { WorkoutDurationBarChartProps } from './type';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const WorkoutDurationBarChart = ({
    dataDuration,
}: WorkoutDurationBarChartProps): JSX.Element => {
    const data = {
        labels: dataDuration.days,
        datasets: [
            {
                label: 'Минуты',
                data: dataDuration.minutes,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Продолжительность тренировок по дням',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <>
            <Bar options={options} data={data} />
        </>
    );
};
