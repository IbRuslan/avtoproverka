const initState = {
    themeId: 1,
}

export type themeReducerType = {
    themeId: number
}

export type changeThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state: themeReducerType = initState, action: changeThemeIdAT): themeReducerType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAT => ({ type: 'SET_THEME_ID', id}) // fix any
