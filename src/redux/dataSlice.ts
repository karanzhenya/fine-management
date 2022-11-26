import {createSlice} from "@reduxjs/toolkit";
import {InitialStateType} from "./dataReducer";

const dataSlice = createSlice({
    name: 'data',
    initialState: <InitialStateType[]>[{
        article: 123124,
        carNumber: 'T123',
        description: 'qweqewqew',
        internalDescription: 'qweqewqew',
        initialGuilty: 'Moscow',
        date: Date.now().toString(),
        status: 'В работе',
        finallyGuilty: 'Voronezh',
        fineAmount: 35,
        comment: 'nothing'
    },
        {
            article: 5134123,
            carNumber: 'J1233',
            description: 'xcvcxvh',
            internalDescription: 'jfjfj',
            initialGuilty: 'Minsk',
            date: Date.now().toString(),
            status: 'В работе',
            finallyGuilty: 'Brest',
            fineAmount: 55,
            comment: 'nothing too'
        }],
    reducers: {
        addNewPenalty(state, action) {
            state.push(action.payload)
        },
        deleteCurrentPenalty(state, action) {
            state.filter(s => s.id !== action.payload)
        }
    }

})

export default dataSlice.reducer
export const {addNewPenalty, deleteCurrentPenalty} = dataSlice.actions