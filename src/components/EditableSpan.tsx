import React, {ChangeEvent, useState} from 'react';
import TableCell from "@mui/material/TableCell/TableCell";
import TextField from "@mui/material/TextField/TextField";
import {EditableSpanPropsType} from '../types/types';

function EditableSpan({value}: EditableSpanPropsType) {
    const [visibleMode, setVisibleMode] = useState<boolean>(true)
    const [changedValue, setChangedValue] = useState<any>(value)
    const closeVisibleMode = () => {
        setVisibleMode(false)
        setChangedValue(value)
    }
    const openVisibleMode = () => {
        setVisibleMode(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setChangedValue(e.currentTarget.value)
    }
    return visibleMode ?
        <TableCell onDoubleClick={closeVisibleMode} align="right">{changedValue}</TableCell> :
        <TextField onChange={onChangeHandler} size={"small"} value={changedValue} autoFocus onBlur={openVisibleMode}/>
}

export default EditableSpan;