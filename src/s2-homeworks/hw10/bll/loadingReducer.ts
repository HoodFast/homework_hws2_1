
type stateType={
    isLoading:boolean
}

const initState = {
    isLoading: false,
}

export const loadingReducer = (state:stateType = initState, action: mainType): stateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type mainType = LoadingActionType
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
