import clsx from 'clsx';
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from '../utils/formatCurrency';

export default function TotalStats({
  totalIncome,
  totalExpense,
  totalExpenseByCategory,
  isAmountHidden,
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-3 flex flex-col items-start gap-2 md:col-span-1">
        <div className="flex w-full flex-1 items-center justify-between rounded-xl bg-white px-10 py-6 shadow">
          <div className="">
            <h1 className="text-md p-0 font-bold text-gray-500">Összes bevétel</h1>
            <p className={clsx(isAmountHidden && 'blurred', 'p-0 text-2xl font-bold')}>
              {formatCurrency(totalIncome ?? 0)}
            </p>
          </div>
          <ArrowTrendingUpIcon className="h-8 min-h-[2rem] w-8 min-w-[2rem] text-green-700" />
        </div>

        <div className="flex w-full flex-1 items-center justify-between rounded-xl bg-white px-10 py-6 shadow">
          <div className="">
            <h1 className="text-md p-0 font-bold text-gray-500">Összes kiadás</h1>
            <p className={clsx(isAmountHidden && 'blurred', 'p-0 text-2xl font-bold')}>
              {formatCurrency(totalExpense ?? 0)}
            </p>
          </div>
          <ArrowTrendingDownIcon className="h-8 min-h-[2rem] w-8 min-w-[2rem] text-red-600" />
        </div>
      </div>
      <div className="col-span-3 hidden w-full rounded-xl bg-white px-10 py-6 shadow md:block">
        <h1 className="text-md p-0 font-bold text-gray-500">Legnagyobb kiadások</h1>
        <div className="flex flex-wrap gap-2 py-2">
          {totalExpenseByCategory &&
            totalExpenseByCategory.slice(0, 5).map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="block h-full flex-col items-start justify-center rounded-lg bg-black py-4 px-6">
                  <p className="pb-2 text-sm font-bold text-white">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-300">
                    {item.percentage}%
                  </p>
                  <p
                    className={clsx(
                      isAmountHidden && 'blurred--light',
                      'text-sm font-semibold text-gray-300'
                    )}
                  >
                    {formatCurrency(item.value)}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    tranzakció: {item.count}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
