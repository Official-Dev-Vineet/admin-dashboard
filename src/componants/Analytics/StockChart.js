import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const data = {
    title:'hello',
    datasets: [
        {
            label: 'Income Data',
            data: Array.from({ length: 50 }, () => ({
                x: faker.datatype.number({ min: -100, max: 100 }),
                y: faker.datatype.number({ min: -100, max: 100 }),
                r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Sales Data',
            data: Array.from({ length: 50 }, () => ({
                x: faker.datatype.number({ min: -100, max: 100 }),
                y: faker.datatype.number({ min: -100, max: 100 }),
                r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function StockChart() {
    return <Bubble options={options} data={data} />;
}