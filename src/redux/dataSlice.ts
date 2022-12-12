import {createSlice} from "@reduxjs/toolkit";
import {InitialStateType} from "../types/types";
import uuid from "react-uuid";

const dataSlice = createSlice({
    name: 'data',
    initialState: [
        {
            id: uuid(),
            article: 123124,
            partName: 'support',
            carNumber: 'T123',
            description: 'qweqewqew',
            internalDescription: 'qweqewqew',
            date: '12.12.2022 23:34',
            initialGuilty: 'Moscow',
            status: 'В работе',
            finallyGuilty: 'Voronezh',
            fineAmount: 35,
            comment: 'nothing'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType,
        {
            id: uuid(),
            article: 5134123,
            carNumber: 'J1233',
            partName: 'wheel',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            date: Date.now().toString(),
            initialGuilty: 'Minsk',
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        } as InitialStateType],
    reducers: {
        addNewPenalty(state, action) {
            state.push(action.payload)
        },
        deleteCurrentPenalty(state, action) {
            return state.filter(s => s.id !== action.payload)
        }
    }

})

export default dataSlice.reducer
export const {addNewPenalty, deleteCurrentPenalty} = dataSlice.actions