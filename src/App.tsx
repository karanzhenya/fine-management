import React from 'react';
import DataTable from "./components/DataTable";
import Paper from "@mui/material/Paper/Paper";
import Header from "./components/Header";

export default function App() {
    return (
        <>
            <Header/>
            <Paper elevation={3} style={{marginTop: '10px'}}>
                <DataTable/>
            </Paper>
        </>
    );
}