import clsx from 'clsx';
import { useState } from 'react';
import * as xlsx from 'xlsx';

const readUploadFile = (file, callBack) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = xlsx.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = xlsx.utils.sheet_to_json(worksheet);
    callBack(json, file.name);
  };
  reader.readAsArrayBuffer(file);
};

export default function FileHandler({ onUpload }) {
  const [isDragOver, setIsDragOver] = useState(false);

  const onFileUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!e.target.files) return;

    const file = e.target.files[0];
    readUploadFile(file, (result, fileName) => {
      localStorage.setItem('otp', JSON.stringify(result));
      localStorage.setItem('otpFileName', fileName);
      onUpload(result, fileName);
    });
  };

  const onDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!event.dataTransfer.files) return;

    const files = event.dataTransfer.files;
    readUploadFile(files[0], (result, fileName) => {
      localStorage.setItem('otp', JSON.stringify(result));
      localStorage.setItem('otpFileName', fileName);
      onUpload(result, fileName);
    });
  };

  const onDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onDragEnter = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div>
      <div
        id="drop_zone"
        className={clsx(
          isDragOver && 'border-indigo-600',
          'z-20 mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'
        )}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
      >
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex justify-center text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>OTP kimutatás feltöltése</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={onFileUpload}
              />
            </label>
            <p className="pl-1">vagy húzd ide a file-t</p>
          </div>
          <p className="text-xs text-gray-500">
            jelenleg csak xlsx formátummal és csak OTP bankos kimutatásokkal használható
          </p>
        </div>
      </div>
    </div>
  );
}
