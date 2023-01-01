export const getMonthlyIncomeAndExpense = (data, months) => {
  return months.map((month) => {
    return {
      month,
      expense: data
        .filter((element) => element['Bejövő/Kimenő'] === 'Kimenő')
        .filter((element) => element['Tranzakció dátuma'].startsWith(month))
        .reduce((acc, curr) => acc + curr['Összeg'] * -1, 0),
      income: data
        .filter((element) => element['Bejövő/Kimenő'] === 'Bejövő')
        .filter((element) => element['Tranzakció dátuma'].startsWith(month))
        .reduce((acc, curr) => acc + curr['Összeg'], 0),
      expenseColor: '#e66a6a',
      incomeColor: '#7bb0a6',
    };
  });
};

export const getMonthlyIncomeAndExpenseLineChartData = (data) => {
  return ['income', 'expense'].map((type) => {
    return {
      id: type,
      color: type === 'income' ? '#7bb0a6' : '#e66a6a',
      data: data.map((element) => {
        return {
          x: element.month,
          y: element[type],
        };
      }),
    };
  });
};

export const getTotalIncome = (data) => {
  return data
    .filter((element) => element['Bejövő/Kimenő'] === 'Bejövő')
    .reduce((acc, curr) => acc + curr['Összeg'], 0);
};

export const getTotalExpense = (data) => {
  return (
    data
      .filter((element) => element['Bejövő/Kimenő'] === 'Kimenő')
      .reduce((acc, curr) => acc + curr['Összeg'], 0) * -1
  );
};

export const getTotalExpenseByCategory = (data, categories) => {
  const totalExpense = getTotalExpense(data);

  return categories
    .map((category) => {
      return {
        id: category,
        label: category,
        value: data
          .filter((element) => element['Bejövő/Kimenő'] === 'Kimenő')
          .filter((element) => element['Költési kategória'] === category)
          .reduce((acc, curr) => acc + curr['Összeg'] * -1, 0),
        count: data
          .filter((element) => element['Bejövő/Kimenő'] === 'Kimenő')
          .filter((element) => element['Költési kategória'] === category)
          .reduce((acc) => acc + 1, 0),
      };
    })
    .filter((element) => element.value !== 0)
    .sort((a, b) => b.value - a.value)
    .map((element) => {
      return {
        ...element,
        percentage: ((element.value / totalExpense) * 100).toFixed(2),
      };
    });
};

export const getTotalExpenseByPartner = (data, partners) => {
  const totalExpense = getTotalExpense(data);

  return partners
    .map((partner) => {
      return {
        id: partner,
        label: partner,
        value: data
          .filter((element) => element['Bejövő/Kimenő'] === 'Kimenő')
          .filter((element) => element['Partner neve'] === partner)
          .reduce((acc, curr) => acc + curr['Összeg'] * -1, 0),
        count: data
          .filter((element) => element['Bejövő/Kimenő'] === 'Kimenő')
          .filter((element) => element['Partner neve'] === partner)
          .reduce((acc) => acc + 1, 0),
      };
    })
    .filter((element) => element.value !== 0)
    .sort((a, b) => b.value - a.value)
    .map((element) => {
      return {
        ...element,
        percentage: ((element.value / totalExpense) * 100).toFixed(2),
      };
    });
};
