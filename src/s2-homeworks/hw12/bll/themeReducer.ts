const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdACType): any => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state,themeId:action.id}

        default:
            return state
    }
}

type changeThemeIdACType=ReturnType<typeof changeThemeId>


export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }as const) // fix any
