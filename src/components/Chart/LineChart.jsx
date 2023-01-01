import { ResponsiveLine } from '@nivo/line';
import { sampleLineData } from './sampleData';

const LineChart = ({ payload, isAmountHidden }) => {
  const _payload = payload ?? sampleLineData;
  return (
    <ResponsiveLine
      data={_payload}
      margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 0,
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      colors={(d) => d.color}
      axisTop={null}
      axisRight={null}
      // axisBottom={{
      //   orient: 'bottom',
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'transportation',
      //   legendOffset: 36,
      //   legendPosition: 'middle',
      // }}
      // axisLeft={{
      //   orient: 'left',
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: 'count',
      //   legendOffset: -40,
      //   legendPosition: 'middle',
      // }}
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
      enablePoints={false}
      // enableGridX={false}
      // enableGridY={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
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
    />
  );
};

export default LineChart;
