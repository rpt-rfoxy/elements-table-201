import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "./table";
import "./styles.css";
import { IData } from "./table/table/types";

interface IDataTable {
  text: string
  price?: string
}

export default function App() {

  const data: IData<string, IDataTable> = {
    rows: [
      { text: "Item 1", price: "$10" },
      { text: "Item 2", price: "$20" }
    ],
    heads: ["Head 1", "Head 2"]
  };
  return (
    <div>
      <Table<IDataTable, string> data={data}>
        <TableHead<string>>
          {({ row, doSort }) => (
            <TableHeaderCell>{row}</TableHeaderCell>
          )}
        </TableHead>
        <TableBody<IDataTable, string>>
          {({ row, heads }) => (
            <TableRow>
              <TableCell narrowLabel={heads[0]}>{row?.text}</TableCell>
              <TableCell narrowLabel={heads[1]}>{row?.price}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Table>
        <TableHead>
          <TableHeaderCell>head 1</TableHeaderCell>
          <TableHeaderCell>head 2</TableHeaderCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHead isSticky>
          <TableHeaderCell>head 1</TableHeaderCell>
          <TableHeaderCell>head 2</TableHeaderCell>
        </TableHead>
        <TableBody>
          {Array.from({ length: 50 }, (_, i) => (
            <TableRow>
              <TableCell narrowLabel="head 1">Cell 1</TableCell>
              <TableCell narrowLabel="head 2">Cell 2</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


