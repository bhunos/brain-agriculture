'use client';
import { Chart } from 'react-google-charts';

import { twMerge } from 'tailwind-merge';

export const Graphic = ({
  data,
  title
}: {
  data: [string, number][];
  title: string;
}) => {
  return (
    <div className={twMerge('mt-8 rounded-lg bg-white p-8 shadow-lg')}>
      <h3 className='text-xl font-bold'>{title}</h3>

      <Chart
        chartType='PieChart'
        data={[['Task', 'content'], ...data]}
        width={'100%'}
      />
    </div>
  );
};
