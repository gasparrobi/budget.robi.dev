import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import * as otpUtils from '../utils/otp';

import PieChart from './Chart/PieChart';
// import BarChart from './Chart/BarChart';
import FileHandler from './FileHandler';
import Banner from './Banner';
import {
  sampleExpense,
  sampleIncome,
  sampleMostFreqExpenseByCategoryData,
  sampleMostFreqExpenseByPartnerData,
  sampleTotalExpanseByCategory,
} from './Chart/sampleData';
import MainStats from './MainStats';
import LineChart from './Chart/LineChart';
import TotalStats from './TotalStats';

export default function Dashboard() {
  const { isAmountHidden } = useContext(AppContext);

  const [otpData, setOtpData] = useState(null);
  const [savedData, setSavedData] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [totalIncome, setTotalIncome] = useState(sampleIncome);
  const [totalExpense, setTotalExpense] = useState(sampleExpense);
  const [totalExpenseByCategory, setTotalExpenseByCategory] = useState(
    sampleTotalExpanseByCategory
  );
  const [mostFreqCategories, setMostFreqCategories] = useState(
    sampleMostFreqExpenseByCategoryData
  );
  // const [monthlyIncomeAndExpense, setMonthlyIncomeAndExpense] = useState(null);
  const [monthlyIncomeAndExpenseLine, setMonthlyIncomeAndExpenseLine] = useState(null);
  const [totalExpenseByPartner, setTotalExpenseByPartner] = useState(
    sampleMostFreqExpenseByPartnerData
  );
  const [mostFreqPartners, setMostFreqPartners] = useState(null);

  const onFileUpload = (data, fileName) => {
    setOtpData(data);
    setFileName(fileName);
  };

  const onReset = () => {
    setOtpData(null);
    setSavedData(null);
    setFileName(null);
    localStorage.removeItem('otp');
    localStorage.removeItem('otpFileName');
    setTotalIncome(sampleIncome);
    setTotalExpense(sampleExpense);
    setTotalExpenseByCategory(sampleTotalExpanseByCategory);
    setMostFreqCategories(sampleMostFreqExpenseByCategoryData);
    // setMonthlyIncomeAndExpense(null);
    setMonthlyIncomeAndExpenseLine(null);
    setTotalExpenseByPartner(sampleMostFreqExpenseByPartnerData);
    setMostFreqPartners(null);
  };

  useEffect(() => {
    let _savedData, _fileName;
    if (!savedData) {
      _savedData = localStorage.getItem('otp');
      _fileName = localStorage.getItem('otpFileName');
    }
    if (_savedData) {
      setSavedData(JSON.parse(_savedData));
      setFileName(_fileName ?? null);
    }

    if (!otpData && !savedData) return;

    const _data = otpData || savedData || null;

    // eslint-disable-next-line no-undef
    const categories = [...new Set(_data.map((item) => item['Költési kategória']))];

    // eslint-disable-next-line no-undef
    const partners = [...new Set(_data.map((item) => item['Partner neve']))];

    const months = [
      // eslint-disable-next-line no-undef
      ...new Set(_data.map((item) => item['Tranzakció dátuma'].slice(0, 7))),
    ].sort();

    const _monthlyIncomeAndExpense = otpUtils.getMonthlyIncomeAndExpense(_data, months);
    // used for bar chart, which is not used atm
    // setMonthlyIncomeAndExpense(_monthlyIncomeAndExpense);

    setMonthlyIncomeAndExpenseLine(
      otpUtils.getMonthlyIncomeAndExpenseLineChartData(_monthlyIncomeAndExpense)
    );

    setTotalIncome(otpUtils.getTotalIncome(_data));
    setTotalExpense(otpUtils.getTotalExpense(_data));

    const _totalExpenseByCategory = otpUtils.getTotalExpenseByCategory(_data, categories);
    setTotalExpenseByCategory(_totalExpenseByCategory);

    setMostFreqCategories([..._totalExpenseByCategory].sort((a, b) => b.count - a.count));

    const _totalExpenseByPartner = otpUtils.getTotalExpenseByPartner(_data, partners);
    setTotalExpenseByPartner(_totalExpenseByPartner.slice(0, 5));

    const _mostFreqPartners = [..._totalExpenseByPartner].sort(
      (a, b) => b.count - a.count
    );
    setMostFreqPartners(_mostFreqPartners.slice(0, 10));
  }, [otpData, savedData]);

  return (
    <>
      <div className="min-h-full py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="space-y-6 lg:col-span-2 lg:col-start-1">
            <Banner fileName={fileName} onReset={onReset} />
            <FileHandler onUpload={onFileUpload} />
            <TotalStats
              totalIncome={totalIncome}
              totalExpense={totalExpense}
              isAmountHidden={isAmountHidden}
              totalExpenseByCategory={totalExpenseByCategory}
            />
            <MainStats
              totalExpenseByCategory={totalExpenseByCategory}
              mostFreqCategories={mostFreqCategories}
              totalExpenseByPartner={totalExpenseByPartner}
              mostFreqPartners={mostFreqPartners}
            />

            <div className="mx-auto h-[620px] max-w-7xl overflow-hidden rounded-lg bg-white  text-black shadow sm:p-6 lg:p-8">
              {/* <h1 className="pb-4 text-xl font-semibold text-gray-900">Expense Pie</h1> */}
              <PieChart
                payload={totalExpenseByCategory}
                isAmountHidden={isAmountHidden}
              />
            </div>

            {/* <div className="mx-auto h-[620px] max-w-7xl overflow-hidden rounded-lg bg-white  p-6 pb-10 text-black shadow lg:p-8 lg:pb-12">
              <h1 className="pb-6 text-xl font-semibold text-gray-900">
                Income/Expenses
              </h1>
              <BarChart
                payload={monthlyIncomeAndExpense}
                isAmountHidden={isAmountHidden}
              />
            </div> */}

            <div className="mx-auto h-[620px] max-w-7xl overflow-hidden rounded-lg bg-white  p-6 pb-10 text-black shadow lg:p-8 lg:pb-12">
              {/* <h1 className="pb-6 text-xl font-semibold text-gray-900">
                Income/Expenses
              </h1> */}
              <LineChart
                payload={monthlyIncomeAndExpenseLine}
                isAmountHidden={isAmountHidden}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
