import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
type State = any

export const SetKeyAction: CaseReducer<State, PayloadAction<{ key: string; value?: any }>> = (
    state,
    action
) => {
    const { key, value } = action.payload
    const stateCopy = { ...state }
    stateCopy[key] = value
    return stateCopy
}

export const SetAllAction: CaseReducer<State, PayloadAction<{ [k: string]: any }>> = (
    state,
    action
) => {
    return { ...state, ...(action.payload || {}) }
}

export const RemoveKeyAction: CaseReducer<State, PayloadAction<{ key: string }>> = (
    state,
    action
) => {
    const { key } = action.payload
    const stateCopy = { ...state }
    delete stateCopy[key]
    return stateCopy
}

export const ClearAction: CaseReducer<
    State,
    PayloadAction<{ defaultValues?: { [k: string]: any } }>
> = () => {
    return {}
}
