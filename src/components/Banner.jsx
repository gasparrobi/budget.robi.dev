import Link from 'next/link';

export default function Banner({ fileName, onReset }) {
  return (
    <div className="bg-indigo-600 md:rounded">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-wrap items-center justify-between md:flex-row">
          <div className="flex flex-1 items-center">
            {!fileName && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="h-6 w-full max-w-[1.5rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>

                <p className="ml-3 text-sm font-medium text-white">
                  Jelenleg demó adatokat látsz. Kérlek töltsd fel az{' '}
                  <Link
                    href="https://internetbank.otpbank.hu/"
                    target="_blank"
                    className="underline hover:text-cyan-400"
                  >
                    OTP InternetBankból
                  </Link>{' '}
                  letöltött xlsx file-t.
                </p>
              </>
            )}

            {fileName && (
              <p className="text-sm font-medium text-white">
                Feltöltött file: {fileName}
              </p>
            )}
          </div>
          {fileName && (
            <div className="order-3 mt-2 sm:order-2 sm:mt-0 sm:w-auto">
              <button
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-1 text-sm font-medium text-indigo-600 no-underline shadow-sm hover:bg-indigo-50"
                onClick={onReset}
              >
                Adatok törlése
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
