import Backdrop from '@mui/material/Backdrop/Backdrop';
import Container from '@mui/material/Container/Container';
import Paper from '@mui/material/Paper/Paper';
import TextField from '@mui/material/TextField/TextField';
import React, {ChangeEvent, useState} from 'react';

function BackdropForm() {

    const [text, setText] = useState('')
    const [open, setOpen] = useState(true)
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return (
        <Container>
            <Paper>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={open}
                    onClick={() => {setOpen(!open)}}
                >
                    <TextField autoFocus variant={"outlined"} sx={{backgroundColor: 'white', borderRadius: "10px"}} value={text} onChange={onChangeText}/>
                </Backdrop>
            </Paper>
        </Container>
    );
}

export default BackdropForm;