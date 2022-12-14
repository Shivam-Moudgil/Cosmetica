import {
    Box, Table, TableContainer, Tbody, Th, Thead, Tr
} from "@chakra-ui/react";
import React from "react";
import Rows from "./Rows";

const TableData = () => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          {/* <TableCaption>Cart Data</TableCaption> */}
          <Thead>
            <Tr textAlign={"center"}>
              <Th textAlign={"center"}>Items</Th>
              <Th textAlign={"center"}>Name</Th>
              <Th textAlign={"center"}>Price</Th>
              <Th textAlign={"center"}>Quantity</Th>
              <Th textAlign={"center"}>SubTotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Rows />
            <Rows />
            <Rows />
            <Rows />
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableData;
