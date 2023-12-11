/* eslint-disable react/prop-types */

import { BarChart } from '@mui/x-charts/BarChart';

function OpenedSchoolChart({openedSchoolArray}) {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Ocak', 'Şub', 'Mart', "Nis","May", "Haz","Tem", "Ağu", "Eyl" , "Ekim", "Kas", "Ara"],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: openedSchoolArray,
        },
      ]}
      width={window.innerWidth > 600 ? 450 : 350}
      height={300}
    />
  );
}


export default OpenedSchoolChart;