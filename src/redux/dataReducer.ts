import {createReducer} from "@reduxjs/toolkit";

export type InitialStateType = {
    id: string
    article: number
    carNumber: string
    description: string
    internalDescription: string
    initialGuilty: string
    date: string
    status: 'Решено' | 'В работе'
    finallyGuilty: string
    fineAmount: number
    comment: string
}

const initialState: InitialStateType[] = [{
    id: '12',
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
        id: '34',
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
    }]


export default createReducer(initialState, {})