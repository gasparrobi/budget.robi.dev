import { ResponsivePie } from '@nivo/pie';
import { formatCurrency } from '../../utils/formatCurrency';
import { samplePieData } from './sampleData';

const fillChart = (categories) => {
  return categories
    .sort((a, b) => b.value - a.value)
    .map((category, index) => ({
      match: {
        id: category.id,
      },
      id: index % 2 === 0 ? 'lines' : '',
    }));
};

const PieChart = ({ payload, isAmountHidden }) => {
  const _payload = payload ?? samplePieData;
  return (
    <ResponsivePie
      data={_payload}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      sortByValue={true}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabel={(e) => {
        return isAmountHidden ? `${e.data.percentage}%` : formatCurrency(e.value);
      }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={fillChart(_payload)}
      tooltip={(e) => {
        return (
          <div
            style={{
              background: 'white',
              padding: '9px 12px',
              border: '1px solid #ccc',
            }}
          >
            <div>{e.datum.data.label}</div>
            <div>{formatCurrency(e.datum.data.value)}</div>
            <div>{e.datum.data.percentage}%</div>
          </div>
        );
      }}
    />
  );
};

export default PieChart;
