import {UserType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: 18 }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)

            return action.payload === 'up' ? sortState : sortState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(s => s.age >= 18)
        }
        default:
            return state
    }
}