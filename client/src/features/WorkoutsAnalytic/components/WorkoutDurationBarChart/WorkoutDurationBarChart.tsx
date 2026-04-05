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
                label: 'Минут',
                data: dataDuration.minutes,
                backgroundColor: 'rgba(255,137,4, 0.3)',
                borderColor: 'rgba(255,137,4)',
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
                text: 'Продолжительность тренировок по дням',
                font: {
                    size: 16,
                },
                color: 'rgb(74,85,101)',
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
            <Bar options={options} data={data} className="text-base" />
        </>
    );
};
