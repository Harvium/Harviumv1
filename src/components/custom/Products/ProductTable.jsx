import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const DataTable = ({ data }) => (
  <Table className='rounded-lg border border-white border-t-0'>
    <TableCaption className='text-white'>View all</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className='w-[35%] text-white'>Nazwa</TableHead>
        <TableHead className='text-white'>xxx</TableHead>
        <TableHead className='text-white'>xxx</TableHead>
        <TableHead className='w-[25%] text-white'>xxx</TableHead>
        <TableHead className='text-white'>Data</TableHead>
        <TableHead className='text-white'></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className='bg-transparent'>
      {data.map((value) => (
        <TableRow className='text-white' key={value.id}>
          <TableCell className='font-medium'>{value.fullname}</TableCell>
          <TableCell>{value.companyname}</TableCell>
          <TableCell>{value.age}</TableCell>
          <TableCell>{value.teamname}</TableCell>
          <TableCell>{value.date}</TableCell>
          <TableCell>Handluj</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default DataTable;
