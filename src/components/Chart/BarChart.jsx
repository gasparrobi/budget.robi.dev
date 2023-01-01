import { ResponsiveBar } from '@nivo/bar';
import { formatCurrency } from '../../utils/formatCurrency';
import { sampleBarData } from './sampleData';

const BarChart = ({ payload, isAmountHidden }) => {
  const _payload = payload ?? sampleBarData;

  return (
    <ResponsiveBar
      data={_payload}
      keys={['income', 'expense']}
      indexBy="month"
      margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      enableLabel={false}
      // enableGridY={false}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={(d) => d.data[`${d.id}Color`]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisLeft={
        isAmountHidden
          ? null
          : {
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: 'middle',
              legendOffset: -55,
            }
      }
      // axisBottom={{
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'hónap',
      //   legendPosition: 'middle',
      //   legendOffset: 32,
      // }}
      // axisLeft={{
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'összeg',
      //   legendPosition: 'middle',
      //   legendOffset: -55,
      // }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -40,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={(e) => {
        return (
          <div
            style={{
              background: 'white',
              padding: '9px 12px',
              border: '1px solid #ccc',
            }}
          >
            <div>{e.id}</div>
            <div>{formatCurrency(e.data[e.id])}</div>
          </div>
        );
      }}
      role="application"
    />
  );
};

export default BarChart;
