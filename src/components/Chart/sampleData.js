export const sampleIncome = 6523000;
export const sampleExpense = 5780935;

export const sampleTotalExpanseByCategory = [
  {
    id: 'Lakás',
    label: 'Lakás',
    value: 1500000,
    count: 12,
    percentage: '21.85',
  },
  {
    id: 'Vendéglátás',
    label: 'Vendéglátás',
    value: 689250,
    count: 308,
    percentage: '14.16',
  },
  {
    id: 'Kocsi',
    label: 'Kocsi',
    value: 504966,
    count: 15,
    percentage: '11.31',
  },
  {
    id: 'Bevásárlás',
    label: 'Bevásárlás',
    value: 629292,
    count: 277,
    percentage: '9.52',
  },
  {
    id: 'Elektronikai eszköz',
    label: 'Elektronikai eszköz',
    value: 250250,
    count: 13,
    percentage: '7.68',
  },
];

export const sampleMostFreqExpenseByCategoryData = [...sampleTotalExpanseByCategory].sort(
  (a, b) => b.count - a.count
);

export const sampleMostFreqExpenseByPartnerData = [
  {
    id: 'John Doe',
    label: 'John Doe',
    value: 1526000,
    count: 12,
    percentage: '21.85',
  },
  {
    id: 'Jane Smith',
    label: 'Jane Smith',
    value: 985000,
    count: 11,
    percentage: '8.28',
  },
  {
    id: 'Alza.cz a.s.',
    label: 'Alza.cz a.s.',
    value: 523254,
    count: 12,
    percentage: '6.59',
  },
  {
    id: 'Wolt',
    label: 'Wolt',
    value: 361290,
    count: 52,
    percentage: '4.13',
  },
  {
    id: 'Spar Hungary Kft.',
    label: 'Spar Hungary Kft.',
    value: 273361,
    count: 2,
    percentage: '2.80',
  },
];

export const sampleBarData = [
  {
    month: '2022-01',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 400000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-02',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 400000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-03',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 400000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-04',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 400000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-05',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 420000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-06',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 420000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-07',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 420000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-08',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 420000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-09',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 420000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-10',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 420000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-11',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 420000,
    incomeColor: '#7bb0a6',
  },
  {
    month: '2022-12',
    expense: 392223,
    expenseColor: '#e66a6a',
    income: 540000,
    incomeColor: '#7bb0a6',
  },
];

export const sampleLineData = [
  {
    id: 'income',
    color: '#7bb0a6',
    data: [
      {
        x: '2022-01',
        y: 400000,
      },
      {
        x: '2022-02',
        y: 400000,
      },
      {
        x: '2022-03',
        y: 400000,
      },
      {
        x: '2022-04',
        y: 400000,
      },
      {
        x: '2022-05',
        y: 400000,
      },
      {
        x: '2022-06',
        y: 400000,
      },
      {
        x: '2022-07',
        y: 420000,
      },
      {
        x: '2022-08',
        y: 420000,
      },
      {
        x: '2022-09',
        y: 420000,
      },
      {
        x: '2022-10',
        y: 420000,
      },
      {
        x: '2022-11',
        y: 450000,
      },
      {
        x: '2022-12',
        y: 500000,
      },
    ],
  },
  {
    id: 'expense',
    color: '#e66a6a',
    data: [
      {
        x: '2022-01',
        y: 392223,
      },
      {
        x: '2022-02',
        y: 352223,
      },
      {
        x: '2022-03',
        y: 362223,
      },
      {
        x: '2022-04',
        y: 322223,
      },
      {
        x: '2022-05',
        y: 392223,
      },
      {
        x: '2022-06',
        y: 382223,
      },
      {
        x: '2022-07',
        y: 342223,
      },
      {
        x: '2022-08',
        y: 352223,
      },
      {
        x: '2022-09',
        y: 392223,
      },
      {
        x: '2022-10',
        y: 372223,
      },
      {
        x: '2022-11',
        y: 382223,
      },
      {
        x: '2022-12',
        y: 332223,
      },
    ],
  },
];

export const samplePieData = [
  {
    id: 'Kocsi',
    label: 'Kocsi',
    value: 725814,
    percentage: '17.76',
  },
  {
    id: 'Lakás',
    label: 'Lakás',
    value: 1133634,
    percentage: '30.08',
  },
  {
    id: 'Vendéglátás',
    label: 'Vendéglátás',
    value: 183202,
    percentage: '11.17',
  },
  {
    id: 'Bevásárlás',
    label: 'Bevásárlás',
    value: 429292,
    percentage: '7.50',
  },
  {
    id: 'Elektronikai eszköz',
    label: 'Elektronikai eszköz',
    value: 250250,
    percentage: '6.06',
  },
  {
    id: 'Számlák, rezsi',
    label: 'Számlák, rezsi',
    value: 393581,
    percentage: '3.18',
  },
  {
    id: 'Ajándék',
    label: 'Ajándék',
    value: 153854,
    percentage: '2.86',
  },
  {
    id: 'Szórakozás',
    label: 'Szórakozás',
    value: 146524,
    percentage: '1.99',
  },
  {
    id: 'Egyéb',
    label: 'Egyéb',
    value: 23642,
    percentage: '1.48',
  },
  {
    id: 'Ruházat',
    label: 'Ruházat',
    value: 183307,
    percentage: '1.48',
  },
  {
    id: 'Sport',
    label: 'Sport',
    value: 49570,
    percentage: '1.21',
  },
  {
    id: 'Egészség',
    label: 'Egészség',
    value: 45476,
    percentage: '0.37',
  },
];
