import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function Display() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Year</TableColumn>
        <TableColumn>Rating(IMDb)</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Movie Name</TableCell>
          <TableCell>Release Year</TableCell>
          <TableCell>Rating</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
