import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function PriceTable() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);
  const [category, setCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  useEffect(() => {
    axios.get('https://7g3fm3diw6.execute-api.eu-central-1.amazonaws.com/DEV/ProductPrices')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      })
  }, []);


  /*
  useEffect(() => {
    fetch('../Data/test_data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      })
  }, []);
  */

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (

    <section className="px-4 mx-auto bg-background-primary ">

      <div className='flex flex-col justify-center px-5 md:px-16 py-16 md:py-12 text-white text-center'>
        <h2 className='lg:text-2xl text-2xl font-bold items-center gap-6'>
          Handluj
        </h2>

        <p className='text-xl text-lg mt-2 non-italic'>
          Odkryj z nami świat możliwości handlowych.
        </p>

        <p className='text-sm mt-2 non-italic'>
          Na chwilę obecną prowadzimy tylko indywidualną obsługę. Skontaktuj się z nami.
        </p>

      </div>
      <div className="pr-10 pl-10 ">
        <div className="grid xl:grid-cols-2 grid-flow-col gap-3 justify-center items-center w-auto">
          <div className=" xl:inline-flex overflow-hidden w-full bg-[#12084d] border rounded-sm text-white z-20">
            <div className="block xl:hidden">
              <ul className="space-y-1 text-center">
                <li>
                  <details className="z-30">
                    <summary className="flex cursor-pointer items-center w-full px-2 py-1 text-white hover:bg-gray-100 hover:text-gray-700 min-w-max text-center justify-center">
                      <span className="text-xs font-medium"> Kategorie </span>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="absolute left-15 flex flex-col bg-[#12084d] rounded-sm z-30 border border-white">
                      <button className="block w-full px-2 py-1 text-center text-xs text-white hover:bg-gray-50 hover:text-gray-700 border-b" onClick={() => setCategory('all')}>
                        Popularne
                      </button>
                      <button className="block w-full px-2 py-1 text-center text-xs text-white hover:bg-gray-50 hover:text-gray-700 border-b" onClick={() => setCategory('commodity')}>
                        Indeksy
                      </button>
                      <button className="block w-full px-2 py-1 text-center text-xs text-white hover:bg-gray-50 hover:text-gray-700 border-b" onClick={() => setCategory('grain')}>
                        Produkty rolnicze
                      </button>
                      <button className="block w-full px-2 py-1 text-center text-xs text-white hover:bg-gray-50 hover:text-gray-700 border-b" onClick={() => setCategory('diary')}>
                        Produkty mleczarskie
                      </button>
                      <button className="block w-full px-2 py-1 text-center text-xs text-white hover:bg-gray-50 hover:text-gray-700 border-b" onClick={() => setCategory('semi_product')}>
                        Półprodukty
                      </button>
                      <button className="block w-full px-2 py-1 text-center text-xs text-white hover:bg-gray-50 hover:text-gray-700" onClick={() => setCategory('livestock')}>
                        Żywiec
                      </button>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
            <div className="hidden xl:flex divide-x items-stretch w-auto">
              <button className="px-2 py-1 font-medium transition-colors duration-200 sm:text-sm text-center whitespace-nowrap" onClick={() => setCategory('all')}>Popularne</button>
              <button className="px-2 py-1 font-medium transition-colors duration-200 sm:text-sm text-center whitespace-nowrap" onClick={() => setCategory('commodity')}>Indeksy</button>
              <button className="px-2 py-1 font-medium transition-colors duration-200 sm:text-sm text-center whitespace-nowrap" onClick={() => setCategory('grain')}>Produkty rolnicze</button>
              <button className="px-2 py-1 font-medium transition-colors duration-200 sm:text-sm text-center whitespace-nowrap" onClick={() => setCategory('diary')}>Produkty mleczarskie</button>
              <button className="px-2 py-1 font-medium transition-colors duration-200 sm:text-sm text-center whitespace-nowrap" onClick={() => setCategory('semi_product')}>Półprodukty</button>
              <button className="px-2 py-1 font-medium transition-colors duration-200 sm:text-sm text-center whitespace-nowrap" onClick={() => setCategory('livestock')}>Żywiec</button>
            </div>
          </div>
          <div className="w-full md:w-auto md:max-w-[calc(100vw/6)] md:flex-1">
            <input
              type="text"
              placeholder="Szukaj..."
              className="h-8 w-full rounded-md border border-gray-300 transition-colors duration-200 focus:bg-gray-100 focus:ring-0 focus:outline-violet-900 text-sm"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
          </div>
        ) : (
          <Table className='rounded-lg border-2 border-white mt-1 text-xs'>
            <TableCaption className="text-left">*Ceny są odświeżane z różną częstotliwością. Pracujemy nad możliwością dostarczania notowań w czasie rzeczywistym.</TableCaption>
            <TableHeader className="bg-[#12084d]/70">
              <TableRow>
                <TableHead className="w-[50px] sm:w-[30px] md:w-[50px] text-white py-1 border-b-2" onClick={() => requestSort('ProductName')}>
                  <span>Produkt</span>
                  <svg class="h-3 inline-block ml-1" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                    <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                    <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664V0.633865Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                  </svg>
                </TableHead>
                <TableHead className="w-[50px] text-white py-1 border-b-2" onClick={() => requestSort('Data')}>Data notowania</TableHead>
                <TableHead className="w-[50px] text-white py-1 border-b-2" onClick={() => requestSort('AvgPrice')}>Ostatnia cena</TableHead>
                <TableHead className="w-[50px] text-white py-1 border-b-2" onClick={() => requestSort('Change')}>Zmiana</TableHead>
                <TableHead className="w-[50px] text-white py-1 border-b-2" onClick={() => requestSort('AvgPrice')}>Cena kupna</TableHead>
                <TableHead className="w-[50px] text-white py-1 border-b-2" onClick={() => requestSort('AvgPrice')}>Cena sprzedaży</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-violet-950/35">
              {currentItems.filter((row) => row.ProductName.toLowerCase().includes(searchTerm.toLowerCase()) && (category === 'all' || row.Category === category)).map((row, index) =>
                <TableRow className="text-white">
                  <TableCell className="font-medium text-white py-1 ">  <Link to={`/Trade`}>
                    {row.ProductName}
                  </Link></TableCell>
                  <TableCell className="text-white py-1 whitespace-nowrap">{row.Data}</TableCell>
                  <TableCell className="text-white py-1">{row.AvgPrice}</TableCell>
                  <TableCell className="text-yellow-500 py-1">{row.PercentChange}%</TableCell>
                  <TableCell className="text-white py-1">{(row.AvgPrice * 0.95).toFixed(2)}</TableCell>
                  <TableCell className="text-white py-1">{(row.AvgPrice * 1.05).toFixed(2)}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <button
                onClick={handlePrevPage}
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            {/* Generate the page numbers dynamically */}
            {[...Array(totalPages).keys()].map((page) =>
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page + 1)}
                  className={`block size-8 rounded ${currentPage === page + 1 ? 'bg-violet-900 text-white' : 'border border-gray-100 bg-white text-gray-900'} text-center leading-8`}
                >
                  {page + 1}
                </button>
              </li>
            )}
            <li>
              <button
                onClick={handleNextPage}
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
//<Link to={product/${row.ProductName}}> future forwarding to the product page