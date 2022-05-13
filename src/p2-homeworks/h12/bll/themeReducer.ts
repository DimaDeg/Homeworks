export type ThemeStateType = typeof initState
export type ThemesType = 'dark' | 'red' | 'some'
export type ThemeActionType = ReturnType<typeof changeThemeC>


const initState = {
    theme: 'some' as ThemesType
};


export const themeReducer = (state: ThemeStateType = initState, action: ThemeActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemesType) => ({type: "CHANGE-THEME", theme} as const); // fix any