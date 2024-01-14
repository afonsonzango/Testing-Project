import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartBar = () => {
  const chartRef:any = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [
          {
            label: '',
            data: [12, 45, 22, 75], // Um array com os valores da primeira linha
            borderWidth: 0,
            backgroundColor: 'rgb(103, 16, 189,.5)',
          },
          {
            label: '',
            data: [12, 16, 33, 4], // Um array com os valores da segunda linha
            backgroundColor: 'rgb(103, 16, 189)',
            borderWidth: 0,
          }
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false, // Set to true if you want to display legend, false to hide
          },
        },
      },
    });
  }, []);


  return (
    <>
        <canvas ref={chartRef} />
    </>
  );
};

export default ChartBar;