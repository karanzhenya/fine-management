import React from 'react';
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableHead from "@mui/material/TableHead/TableHead";

function TableHat() {
    return (
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
    );
}

export default TableHat;