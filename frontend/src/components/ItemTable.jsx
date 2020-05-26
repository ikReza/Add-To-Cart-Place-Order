import React from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const ItemTable = ({ finalArr }) => {
  let total = 0;
  if (finalArr.length > 0) {
    finalArr.map((p) => {
      total += p[0].price * p[1];
      return total;
    });
  }
  return (
    <TableContainer component={Paper} style={{ maxHeight: "74vh" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Price($)/unit</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total Price($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalArr.map((row) => (
            <TableRow key={row[0].name}>
              <TableCell component="th" scope="row">
                {row[0].name}
              </TableCell>
              <TableCell align="right">
                <img
                  style={{ height: "5vh", width: "auto" }}
                  src={`https://addtocart-placeorder.herokuapp.com/uploads/${row[0].productImage}`}
                  alt={row[0].name}
                />
              </TableCell>
              <TableCell align="right">{row[0].price}</TableCell>
              <TableCell align="right">{row[1]}</TableCell>
              <TableCell align="right">{row[0].price * row[1]}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={3}>Total Price</TableCell>
            <TableCell align="right">{total.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;
