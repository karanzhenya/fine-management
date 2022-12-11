import React from 'react';
import TableCell from "@mui/material/TableCell/TableCell";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow/TableRow";
import {ItemPropsType} from "../types/types";
import EditableSpan from "./EditableSpan";

function Item(props: ItemPropsType) {
    Object.entries(props.item).map(key => {
        for (let i=0; i<key.length; i++) {
            console.log(key[i])
        }
    })
    return (
        <TableRow
            key={props.item.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            {/*{Object.entries(props.item).map(key => {for (let i=0; i<key.length; i++) {}})}*/}
            <EditableSpan value={props.item.article}/>
            <TableCell align="right">{props.item.carNumber}</TableCell>
            <TableCell align="right">{props.item.partName}</TableCell>
            <TableCell align="right">{props.item.description}</TableCell>
            <TableCell align="right">{props.item.internalDescription}</TableCell>
            <TableCell align="right">{props.item.date}</TableCell>
            <TableCell align="right">{props.item.initialGuilty}</TableCell>
            <TableCell align="right">{props.item.status}</TableCell>
            <TableCell align="right">{props.item.finallyGuilty}</TableCell>
            <TableCell align="right">{props.item.fineAmount}</TableCell>
            <TableCell align="right">{props.item.comment}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="refactor">
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={() => props.deleteItem(props.item.id)}/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default Item;