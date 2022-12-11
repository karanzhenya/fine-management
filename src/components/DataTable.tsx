import React from "react";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import {Items} from "./Items";
import TableHat from "./TableHat";
import {InitialStateType} from "../types/types";
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/redux";

export default function DataTable() {
    const fineData = useSelector<RootStateType, InitialStateType[]>(state => state.data)

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHat/>
                <Items fineData={fineData} />
            </Table>
        </TableContainer>
    );
}