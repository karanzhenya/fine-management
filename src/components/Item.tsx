import React from 'react';
import TableCell from "@mui/material/TableCell/TableCell";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow/TableRow";
import {ItemPropsType} from "../types/types";
import EditableSpan from "./EditableSpan";

function Item(props: ItemPropsType) {
    return (
        <TableRow
            key={props.item.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            {Object.values(props.item).map((value, index) => index !== 0 && <EditableSpan value={value}/>)}
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