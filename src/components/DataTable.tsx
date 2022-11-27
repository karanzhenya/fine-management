import {useAppDispatch} from "../hooks/hooks";
import {deleteCurrentPenalty} from "../redux/dataSlice";
import React from "react";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import Paper from "@mui/material/Paper/Paper";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table/Table";
import {DataTablePropsType} from "../types/types";
import EditIcon from '@mui/icons-material/Edit';

export default function DataTable({fineData}: DataTablePropsType) {

    const dispatch = useAppDispatch();
    const deleteFine = (id: string) => {
        dispatch(deleteCurrentPenalty(id))
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow style={{backgroundColor: "lightgrey"}}>
                        <TableCell>Article</TableCell>
                        <TableCell align="right">Car number</TableCell>
                        <TableCell align="right">Part name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Internal Description</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Initial Guilty</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Finally Guilty</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Comment</TableCell>
                        <TableCell align="right"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fineData.map((f) => (
                        <TableRow
                            key={f.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">{f.article}</TableCell>
                            <TableCell align="right">{f.carNumber}</TableCell>
                            <TableCell align="right">{f.partName}</TableCell>
                            <TableCell align="right">{f.description}</TableCell>
                            <TableCell align="right">{f.internalDescription}</TableCell>
                            <TableCell align="right">{f.date}</TableCell>
                            <TableCell align="right">{f.initialGuilty}</TableCell>
                            <TableCell align="right">{f.status}</TableCell>
                            <TableCell align="right">{f.finallyGuilty}</TableCell>
                            <TableCell align="right">{f.fineAmount}</TableCell>
                            <TableCell align="right">{f.comment}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon onClick={() => deleteFine(f.id)}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}