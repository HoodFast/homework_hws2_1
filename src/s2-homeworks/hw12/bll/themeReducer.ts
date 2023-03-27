type ActionType={
    type:string
    id:number
}
type StateType={
    themeId: number
}

const initState:StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdACType):StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state,themeId:action.id}

        default:
            return state
    }
}

type changeThemeIdACType=ReturnType<typeof changeThemeId>


export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }as const) // fix any
