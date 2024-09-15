import React, { useState, useEffect, useRef } from 'react';
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
} from "@/components/ui/table";

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
      });
  }, []);

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

  const filteredData = sortedData.filter((row) => row.ProductName.toLowerCase().includes(searchTerm.toLowerCase()) && (category === 'all' || row.Category === category));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Ensure there are 15 rows by adding empty rows if necessary
  const paddedItems = [...currentItems];
  while (paddedItems.length < 15) {
    paddedItems.push({ isEmpty: true }); // Push empty object to represent empty row
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
  
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
  
      if (currentPage <= 3) {
        for (let i = 2; i < maxPagesToShow; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 3; i < totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
      }
  
      // Add the "z" separator between pages
      pageNumbers.push('z');
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((page, index) => (
      <li key={index}>
      {typeof page === 'number' ? (
        <button
          onClick={() => setCurrentPage(page)}
          className={`block size-8 rounded ${currentPage === page ? 'bg-tablerow text-foreground' : 'bg-white text-gray-700'} text-center leading-8 hover:text-foreground hover:bg-tablerow/90`}
        >
          {page}
        </button>
      ) : (
        <span className="block size-8 text-white text-center leading-8">{page}</span>
      )}
    </li>
    ));
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen]);

  const truncateProductName = (name) => {
    if (name.length > 25) {
      return name.slice(0, 25) + '...';
    }
    return name;
  };

  return (
    <section className="mx-auto bg-background p-3 sm:p-3">
      <div className='flex flex-col justify-center text-foreground text-center'>
        <h1 className='lg:text-md text-md font-bold items-center'>
          Wybierz i kliknij produkt.
        </h1>
        
        <p className='text-sm mt-1 non-italic'>
          Po wyborze produktu będziesz w stanie określić interesujące Cię szczegóły dotyczące produktu.
        </p>
      </div>
      <div className="pr-10 pl-10">
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 rounded-full animate-pulse"></div>
          </div>
        ) : (
          <Table className='border-2 border-foreground/30 mt-1 text-xs text-center rounded-sm'>
            <TableHeader className="bg-table">
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="grid xl:grid-cols grid-flow-col gap-8 justify-start items-center w-auto">
                    <div className="block" ref={dropdownRef}>
                      <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer items-center w-full px-2 py-1 text-foreground hover:bg-table/50 min-w-max text-center justify-center rounded-md">
                        <span className="text-md font-bold"> Kategorie </span>
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
                      </button>
                      {isOpen && (
                        <div className="absolute left-15 flex flex-col bg-table rounded-sm z-30 border border-foreground/30">
                          {['popularne', 'wszystkie', 'indeksy', 'produkty rolnicze', 'produkty mleczarskie', 'półprodukty', 'żywiec'].map((category, index) => (
                            <button
                              key={category}
                              className={`block w-full px-2 py-1 text-center text-xs hover:bg-gray-300 ${index < 6 ? 'border-b border-foreground/30' : ''}`}
                              onClick={() => setCategory(category)}
                            >
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-auto md:max-w-[calc(100vw/6)] md:flex-1 text-left">
                      <form>
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                          <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="simple-search"
                            placeholder="Szukaj"
                            className="bg-gray-50 border border-foreground/30 text-black text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block min-w-[10rem] w-full pl-10 p-1.5"
                            onChange={(event) => {
                              setSearchTerm(event.target.value);
                            }}
                            required=""
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-[50px] sm:w-[30px] md:w-[50px] text-foreground py-1 border-b-4 border-foreground/30 " onClick={() => requestSort('ProductName')}>
                  <span>Produkt</span>
                  <svg className="h-3 inline-block ml-1" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                    <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                    <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                  </svg>
                </TableHead>
                <TableHead className="w-[50px] text-foreground text-center py-1 border-b-4 border-foreground/30" onClick={() => requestSort('AvgPrice')}>Ostatnia cena</TableHead>
                <TableHead className="w-[50px] text-foreground text-center py-1 border-b-4 border-foreground/30" onClick={() => requestSort('PercentChange')}>Zmiana</TableHead>
                <TableHead className="w-[50px] text-foreground text-center py-1 border-b-4 border-foreground/30" onClick={() => requestSort('AvgPrice')}>Cena kupna</TableHead>
                <TableHead className="w-[50px] text-foreground text-center py-1 border-b-4 border-foreground/30" onClick={() => requestSort('AvgPrice')}>Cena sprzedaży</TableHead>
                <TableHead className="w-[50px] text-foreground text-center py-1 border-b-4 border-foreground/30" onClick={() => requestSort('Data')}>Data notowania</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-tablerow/0">
              {paddedItems.map((row, index) => {
                if (row.isEmpty) {
                  return (
                    <TableRow key={index} className={`cursor-pointer hover:bg-tablerow/70 ${index % 2 === 0 ? 'bg-tablerow/50' : 'bg-tablerow/20'}`}>
                      <TableCell colSpan={6} className="py-1">&nbsp;</TableCell> {/* Empty row */}
                    </TableRow>
                  );
                }

                let colorClass;
                if (row.PercentChange > 0.1) {
                  colorClass = "font-medium text-green-500";
                } else if (row.PercentChange < -0.1) {
                  colorClass = "font-medium text-red-500";
                } else {
                  colorClass = "font-medium text-foreground";
                }

                return (
                  <TableRow key={index} className={`cursor-pointer hover:bg-tablerow/70 ${index % 2 === 0 ? 'bg-tablerow/50' : 'bg-tablerow/20'}`}>
                    <TableCell className="font-medium text-foreground py-1 text-left whitespace-nowrap w-[200px]">
  <Link to="https://app.harvium.pl/">
    {truncateProductName(row.ProductName)}
  </Link>
</TableCell>
                    <TableCell className="text-foreground py-1 whitespace-nowrap"><Link to="https://app.harvium.pl">{row.AvgPrice}</Link></TableCell>
                    <TableCell className={`${colorClass} py-1 whitespace-nowrap`}><Link to="https://app.harvium.pl">{row.PercentChange}%</Link></TableCell>
                    <TableCell className="text-foreground py-1 whitespace-nowrap"><Link to="https://app.harvium.pl">{(row.AvgPrice * 0.95).toFixed(2)}</Link></TableCell>
                    <TableCell className="text-foreground py-1 whitespace-nowrap"><Link to="https://app.harvium.pl">{(row.AvgPrice * 1.05).toFixed(2)}</Link></TableCell>
                    <TableCell className="text-foreground py-1 whitespace-nowrap"><Link to="https://app.harvium.pl">{row.Data}</Link></TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={6} className="text-right">
                  <div>
                    <ol className="flex justify-start gap-1 text-xs font-medium">
                      <li>
                        <button
                          onClick={handlePrevPage}
                          className="inline-flex size-8 items-center justify-center rounded border border-foreground/10 bg-tablerow text-foreground rtl:rotate-180 hover:bg-tablerow/50"
                        >
                          <span className="sr-only">Poprzednia strona</span>
                          <svg fill="currentcolor" height="11" width="11px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                            <g>
                              <path d="M19.5,28c1,0,1.8-0.4,2.5-1c1.4-1.4,1.4-3.6,0-5l-5.7-5.8c-0.1-0.1-0.1-0.2,0-0.3l5.7-5.8c1.4-1.4,1.4-3.6,0-5c-0.7-0.7-1.6-1-2.5-1c-1,0-1.8,0.4-2.5,1l-9.3,9.4c-0.9,0.9-0.9,2.3,0,3.1l9.3,9.4C17.7,27.6,18.5,28,19.5,28z"/>
                            </g>
                          </svg>
                        </button>
                      </li>
                      {renderPageNumbers()}
                      <li>
                        <button
                          onClick={handleNextPage}
                          className="inline-flex size-8 items-center justify-center rounded border border-foreground/10 bg-tablerow text-foreground rtl:rotate-180 hover:bg-tablerow/50"
                        >
                          <span className="sr-only">Next Page</span>
                          <svg fill="currentcolor" height="11" width="11px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                            <g>
                              <path d="M12.5,28c-1,0-1.8-0.4-2.5-1c-1.4-1.4-1.4-3.6,0-5l5.7-5.8c0.1-0.1,0.1-0.2,0-0.3L10,10.1c-1.4-1.4-1.4-3.6,0-5c0.7-0.7,1.6-1,2.5-1c0,0,0,0,0,0c1,0,1.8,0.4,2.5,1l9.3,9.4c0.9,0.9,0.9,2.3,0,3.1l-9.3,9.4C14.4,27.6,13.5,28,12.5,28C12.5,28,12.5,28,12.5,28z"/>
                            </g>
                          </svg>
                        </button>
                      </li>
                    </ol>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        <div className="text-sm text-left text-foreground px-2 py-"></div>
      </div>
    </section>
  );
}
