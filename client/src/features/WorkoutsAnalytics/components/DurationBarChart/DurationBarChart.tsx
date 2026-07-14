import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { DurationBarChartProps } from './type';
import { useMemo } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const DEFAULT_OPTIONS = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
            labels: {
                font: { size: 13 },
                color: 'rgb(74,85,101)',
            },
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

const COLORS = {
    backgroundColor: 'rgba(255,137,4, 0.3)',
    borderColor: 'rgba(255,137,4)',
};

const DurationBarChart = ({
    dataBar,
    unitName,
}: DurationBarChartProps): React.JSX.Element => {
    const data = useMemo(() => {
        return {
            labels: dataBar.days,
            datasets: [
                {
                    label: unitName,
                    data: dataBar.duration,
                    backgroundColor: COLORS.backgroundColor,
                    borderColor: COLORS.borderColor,
                    borderWidth: 1,
                },
            ],
        };
    }, [unitName, dataBar.duration, dataBar.days]);

    return <Bar options={DEFAULT_OPTIONS} data={data} className="text-base" />;
};

export default DurationBarChart;
