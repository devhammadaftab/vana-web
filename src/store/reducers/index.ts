import { InitialStateType, ActionType } from 'interfaces'
import { ActionConstent } from 'constants/store'
import initialState from 'store/states'

const reducer = (state: InitialStateType, actions: ActionType) => {
    switch (actions.type) {
        case ActionConstent.SET_NAME:
            return {
                ...state,
                id: actions.payload
            }
        case ActionConstent.SET_GOLF:
            return {
                ...state,
                ...actions.payload
            }
        case ActionConstent.SET_APP_LOADER:
            return {
                ...state,
                loader: actions.payload
            }
        case ActionConstent.SET_RESET:
            return initialState
        default:
            return state
    }
}

export default reducer