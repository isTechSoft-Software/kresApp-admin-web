import * as React from 'react';

import { LineChart } from '@mui/x-charts/LineChart';
function PaymentChart({paymentArray}) {
  return (
    <LineChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Ocak', 'Şub', 'Mart', "Nis","May", "Haz","Tem", "Ağu", "Eyl" , "Ekim", "Kas", "Ara"],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: paymentArray,
        },
      ]}
      width={window.innerWidth > 600 ? 450 : 350}
      height={300}
    />
  );
}


export default PaymentChart;