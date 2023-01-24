import { ActionConstent } from "../constants/store"

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export interface InitialStateType {
    id: String
    scores: Number[]
    average: Number
    handicap: Number
    loader: boolean
}