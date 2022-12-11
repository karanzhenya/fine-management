import React, {useState} from "react";
import TableCell from "@mui/material/TableCell/TableCell";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow/TableRow";
import {InitialStateType, ItemsPropsType} from "../types/types";
import {deleteCurrentPenalty} from "../redux/dataSlice";
import {useAppDispatch} from "../hooks/hooks";
import TableBody from "@mui/material/TableBody/TableBody";
import Item from "./Item";


export const Items = (props: ItemsPropsType) => {
    const dispatch = useAppDispatch();
    const deleteFine = (id: string) => {
        dispatch(deleteCurrentPenalty(id))
    }
    return (
        <TableBody>
            {props.fineData.map((f: InitialStateType) => <Item item={f} deleteItem={deleteFine} key={f.id}/>)}
        </TableBody>

    )
}