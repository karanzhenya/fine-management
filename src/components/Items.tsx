import React from "react";
import TableCell from "@mui/material/TableCell/TableCell";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow/TableRow";
import {InitialStateType} from "../types/types";
import {deleteCurrentPenalty} from "../redux/dataSlice";
import {useAppDispatch} from "../hooks/hooks";
import TableBody from "@mui/material/TableBody/TableBody";
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/redux";

export const Items = () => {
    const fineData: InitialStateType[] = useSelector<RootStateType, InitialStateType[]>(state => state.data)

    const dispatch = useAppDispatch();
    const deleteFine = (id: string) => {
        dispatch(deleteCurrentPenalty(id))
    }
    return (
        <TableBody>
            {fineData.map((f: InitialStateType) => <TableRow
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
            )}
        </TableBody>

    )
}