import { useContext, useState } from 'react';
import clsx from 'clsx';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';

export default function MainStats({
  totalExpenseByCategory,
  mostFreqCategories,
  totalExpenseByPartner,
  mostFreqPartners,
}) {
  const [selected, setSelected] = useState('totalExpenseByPartner');
  const { isAmountHidden } = useContext(AppContext);

  const dynamicData =
    selected === 'totalExpenseByPartner' ? totalExpenseByPartner : mostFreqPartners;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-1 w-full rounded-xl bg-white px-10 py-6 shadow">
        <h1 className="text-md p-0 font-bold text-gray-500">Legnagyobb kiadások</h1>
        <div className="flex flex-col gap-2 pt-4">
          {totalExpenseByCategory &&
            totalExpenseByCategory.slice(0, 5).map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="flex h-full w-full items-center pt-2 pb-1 ">
                  <BanknotesIcon className="mr-3 h-8 w-8 text-indigo-600" />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium ">{item.label}</p>
                      <p
                        className={clsx(
                          isAmountHidden && 'blurred',
                          'text-sm font-medium'
                        )}
                      >
                        {formatCurrency(item.value)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" text-sm font-normal text-gray-500">
                        tranzakció: {item.count}
                      </p>
                      <p className="text-sm font-normal text-gray-500">
                        {item.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="col-span-1 w-full rounded-xl bg-white px-10 py-6 shadow">
        <h1 className="text-md p-0 font-bold text-gray-500">Leggyakoribb tranzakciók</h1>
        <div className="flex flex-col gap-2 pt-4">
          {mostFreqCategories &&
            mostFreqCategories.slice(0, 5).map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="flex h-full w-full items-center pt-2 pb-1 ">
                  <BanknotesIcon className="mr-3 h-8 w-8 text-indigo-600" />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium ">{item.label}</p>
                      <p
                        className={clsx(
                          isAmountHidden && 'blurred',
                          'text-sm font-medium'
                        )}
                      >
                        {formatCurrency(item.value)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" text-sm font-normal text-gray-500">
                        tranzakció: {item.count}
                      </p>
                      <p className="text-sm font-normal text-gray-500">
                        {item.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="col-span-1 w-full rounded-xl bg-white px-10 py-6 shadow">
        {/* <h1 className="text-md p-0 font-bold text-gray-500">Legnagyobb kiadás/partner</h1> */}
        <div>
          <select
            id="location"
            name="location"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base font-semibold focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="totalExpenseByPartner"
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            <option value="totalExpenseByPartner">Legnagyobb kiadás/partner</option>
            <option value="mostFreqPartners">Leggyakoribb kiadás/partner</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          {dynamicData &&
            dynamicData.slice(0, 5).map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="flex h-full w-full items-center pt-2 pb-1 ">
                  <UserCircleIcon className="mr-3 h-8 w-8 text-indigo-600" />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium ">
                        {item.label.slice(0, 18).toLowerCase()}
                      </p>
                      <p
                        className={clsx(
                          isAmountHidden && 'blurred',
                          'text-sm font-medium'
                        )}
                      >
                        {formatCurrency(item.value)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className=" text-sm font-normal text-gray-500">
                        tranzakció: {item.count}
                      </p>
                      <p className="text-sm font-normal text-gray-500">
                        {item.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
