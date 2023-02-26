import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return [...state].sort((a, b) =>action.payload === 'up'? a.name.localeCompare(b.name):b.name.localeCompare(a.name)) // need to fix
        }
        case 'check': {

            return state.filter(el=> el.age>=18) // need to fix
        }
        default:
            return state
    }
}
