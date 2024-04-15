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
  <div className="bg-background-primary pr-10 pl-10">
  <Table className='rounded-lg border-2 border-white bg-transparent mt-20'>
  <TableCaption className="text-left">*Ceny są odświeżane z różną częstotliwością. Pracujemy nad możliwością dostarczania notowań w czasie rzeczywistym</TableCaption>
  <TableHeader className="bg-violet-950/40">
    <TableRow>
      <TableHead className="w-[50px] text-white">Symbol</TableHead>
      <TableHead className="w-[50px] text-white">Data</TableHead>
      <TableHead className="w-[50px] text-white">Cena</TableHead>
      <TableHead className="w-[50px] text-white">Zmiana</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="bg-violet-950/40">
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
