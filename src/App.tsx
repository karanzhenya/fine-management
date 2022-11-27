import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/redux";
import {InitialStateType} from "./types/types";
import DataTable from "./components/DataTable";
import Paper from "@mui/material/Paper/Paper";
import Header from "./components/Header";

export default function App() {
    const fineData: InitialStateType[] = useSelector<RootStateType, InitialStateType[]>(state => state.data)
    return (
        <>
            <Header/>
            <Paper elevation={3} style={{marginTop: '10px'}}>
                <DataTable fineData={fineData}/>
            </Paper>

        </>
    );
}