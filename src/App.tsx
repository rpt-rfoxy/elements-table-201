import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "./table";
import "./styles.css";

export default function App() {

  return (
    <div>
      <Table>
        <TableHead>
          <TableHeaderCell width="100px">head 1</TableHeaderCell>
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
          <TableHeaderCell width="200px">head 1</TableHeaderCell>
          <TableHeaderCell>head 2</TableHeaderCell>
        </TableHead>
        <TableBody>
          {Array.from({ length: 50 }, (_, i) => (
            <TableRow>
              <TableCell>Cell 1</TableCell>
              <TableCell >Cell 2</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


