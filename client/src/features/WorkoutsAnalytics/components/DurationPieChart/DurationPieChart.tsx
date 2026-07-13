import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import type { DurationPieChartProps } from './type';
import { useMemo } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const DEFAULT_OPTIONS = {
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
    },
};

const COLORS = {
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
};

const DurationPieChart = ({
    dataPie,
    unitName,
}: DurationPieChartProps): React.JSX.Element => {
    const data = useMemo(() => {
        return {
            labels: dataPie.types,
            datasets: [
                {
                    label: unitName,
                    data: dataPie.duration,
                    backgroundColor: COLORS.backgroundColor,
                    borderColor: COLORS.borderColor,
                    borderWidth: 1,
                },
            ],
        };
    }, [unitName, dataPie.duration, dataPie.types]);

    return <Pie data={data} options={DEFAULT_OPTIONS} />;
};

export default DurationPieChart;
