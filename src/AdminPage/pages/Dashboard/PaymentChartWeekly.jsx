import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function PaymentChartWeekly({paymentArray}) {
  return (
    <LineChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Pzt', 'Sal', 'Çrş', "Per","Cum", "Cts","Paz"],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: paymentArray,
        },
      ]}
      width={450}
      height={300}
    />
  );
}


export default PaymentChartWeekly;