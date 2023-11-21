import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function OpenedSchoolChart({openedSchoolArray}) {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Ocak', 'Şub', 'Mart', "Nis","May", "Haz","Tem", "Ağus", "Eyl" , "Ekim", "Kas", "Ara"],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: openedSchoolArray,
        },
      ]}
      width={450}
      height={300}
    />
  );
}


export default OpenedSchoolChart;