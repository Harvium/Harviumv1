import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  // Fetch data from server when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then((response) => {
        setData(response.data);
      });
  }, []);


  return (
  <div className="mt-32 pr-10 pl-10">
  <Table className='rounded-lg border-2 border-white mt-20'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader className="bg-black">
    <TableRow>
      <TableHead className="w-[50px] text-white">Symbol</TableHead>
      <TableHead className="w-[50px] text-white">Data</TableHead>
      <TableHead className="w-[50px] text-white">Cena</TableHead>
      <TableHead className="w-[50px] text-white">Zmiana</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="bg-transparent">
    {data.map((row,index) => 
    <TableRow className="text-white">
      <TableCell className="font-medium text-white">{row.Symbol}</TableCell>
      <TableCell className="text-white">{row.Data}</TableCell>
      <TableCell className="text-white">{row.Zamkniecie}</TableCell>
      <TableCell className="text-green-500">0.2%</TableCell>
    </TableRow>
    )}
  </TableBody>
</Table>
</div>
  )
}
