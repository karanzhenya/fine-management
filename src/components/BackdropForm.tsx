import Backdrop from '@mui/material/Backdrop/Backdrop';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import TextField from '@mui/material/TextField/TextField';
import React, {ChangeEvent, useState} from 'react';
import {BackDropFormPropsType} from "../types/types";

function BackdropForm(props: BackDropFormPropsType) {
    const [text, setText] = useState('')
    const [visibleMode, setVisibleMode] = useState(false)
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const openVisibleMode = () => {
        setVisibleMode(true)
    }
    const closeVisibleMode = () => {
        setVisibleMode(false)
    }
    return (
        <Container>
            <Paper>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={props.open}
                    onClick={() => {
                        props.setOpen(false)
                    }}
                >
                    <Grid container sx={{
                        backgroundColor: 'white',
                        width: 500,
                        height: 400,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        <Grid item>
                            {visibleMode ? <TextField autoFocus variant={"outlined"}
                                                      sx={{backgroundColor: 'white', borderRadius: "10px"}}
                                                      value={text} onChange={onChangeText}/> :
                                <div className={'block'} style={{color: 'black'}}>
                                    <div onDoubleClick={openVisibleMode}>
                                        <div>Article: </div>
                                        <div style={{color: "black"}}>{props.changedItem.article}</div>
                                    </div>
                                    <div>
                                        <div>Car number: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Part name: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Description: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Internal description: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Date: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Initial guilty: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Status: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Finally guilty: </div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Amount</div>
                                        <div>{}</div>
                                    </div>
                                    <div>
                                        <div>Comment</div>
                                        <div>{}</div>
                                    </div>

                                </div>}

                        </Grid>
                    </Grid>
                </Backdrop>
            </Paper>
        </Container>
    );
}

export default BackdropForm;