import React, {useState} from 'react';
import TableCell from "@mui/material/TableCell/TableCell";
import TextField from "@mui/material/TextField/TextField";
import { EditableSpanPropsType } from '../types/types';

function EditableSpan({value}: EditableSpanPropsType) {
    const [visibleMode, setVisibleMode] = useState<boolean>(true)
    const [changedValue, setChangedValue] = useState<any>()
    const closeVisibleMode = () => {
        setVisibleMode(false)
        setChangedValue(value)
    }
    const openVisibleMode = () => {
        setVisibleMode(true)
    }
    return visibleMode ? <TableCell onDoubleClick={closeVisibleMode} align="right">{value}</TableCell> :
            <TextField value={changedValue} autoFocus onBlur={openVisibleMode}/>
}

export default EditableSpan;