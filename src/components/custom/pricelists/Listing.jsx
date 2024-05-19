import React from 'react';

const Listing = ({ listing }) => (
  <div className=" overflow-x-auto border border-blue-900">
    <table className="bg-background-primary min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr >
          <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Name</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Date of Birth</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Role</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-white">Salary</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr class="odd:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-black">John Doe</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">Web Developer</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">$120,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-white">Jane Doe</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">04/11/1980</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">Web Designer</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">$100,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr class="odd:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-black">Gary Barlow</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">Singer</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">$20,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-white">Jane Doe</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">04/11/1980</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">Web Designer</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">$100,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr class="odd:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-black">Gary Barlow</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">Singer</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">$20,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-white">Jane Doe</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">04/11/1980</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">Web Designer</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">$100,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr class="odd:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-black">Gary Barlow</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">Singer</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">$20,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-white">Jane Doe</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">04/11/1980</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">Web Designer</td>
          <td className="whitespace-nowrap px-4 py-2 text-white">$100,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>

        <tr class="odd:bg-gray-50">
          <td className="whitespace-nowrap px-4 py-2 font-medium text-black">Gary Barlow</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">Singer</td>
          <td className="whitespace-nowrap px-4 py-2 text-black">$20,000</td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kup teraz
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
      <ol className="flex justify-end gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-black rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              Kup terazBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-black"
          >
            1
          </a>
        </li>

        <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-black">
          2
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-black"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-black"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-black rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              Kup terazBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>


  </div>

);

export default Listing;
