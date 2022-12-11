import {Dispatch, SetStateAction} from "react";

export type InitialStateType = {
    id: string
    article: number
    partName: string
    carNumber: string
    description: string
    internalDescription: string
    note: string
    initialGuilty: string
    date: string
    status: 'Решено' | 'В работе'
    finallyGuilty: string
    fineAmount: number
    comment: string
}
export type ItemsPropsType = {
    fineData: InitialStateType[]
}

export type ItemPropsType = {
    item: InitialStateType,
    deleteItem: (id: string) => void
}

export type BackDropFormPropsType = {
    changedItem: InitialStateType,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export type EditableSpanPropsType = {
    value: any
}
