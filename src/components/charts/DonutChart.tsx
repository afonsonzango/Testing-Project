import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface DonutChartProps {};

const DonutChart: React.FC<DonutChartProps> = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Example data
    const data = {
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['rgb(37, 0, 75)', 'rgb(103, 16, 189,.8)', 'rgb(103, 16, 189,.3)'],
          hoverBackgroundColor: ['#FF6384', '#FF6384', '#FF6384'],
        },
      ],
    };

    // Chart configuration
    const options:any = {
      cutoutPercentage: 70, // Adjust the cutout percentage for a donut shape
    };

    // Create the chart
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <canvas ref={chartRef}></canvas>
  );
};

export default DonutChart;
