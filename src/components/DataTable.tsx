import React from "react";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import {Items} from "./Items";
import TableHat from "./TableHat";

export default function DataTable() {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHat />
                <Items />
            </Table>
        </TableContainer>
    );
}