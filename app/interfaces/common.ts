export interface Goal{
    id?: number,
    goal: string,
    complete: number,
    date: string
}

export interface SQLLiteResponse{
    res: {
        rows: Array<Object>
    },
    txt: any
}