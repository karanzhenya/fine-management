export type InitialStateType = {
    id: string
    article: number
    carNumber: string
    partName: string
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
