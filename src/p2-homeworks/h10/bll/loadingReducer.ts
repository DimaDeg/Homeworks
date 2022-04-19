export type initStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}

export type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => ({type: 'IS-LOADING', loading} as const)// fix any