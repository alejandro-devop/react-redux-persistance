import { createSlice } from '@reduxjs/toolkit'
import { SetKeyAction, ClearAction, RemoveKeyAction, SetAllAction } from './session.actions'

type SliceOptionsType = {
    initialValues?: { [k: string]: any }
}

export const createSessionSlice = ({ initialValues }: SliceOptionsType) =>
    createSlice({
        name: 'session',
        initialState: initialValues,
        reducers: {
            setKeyAction: SetKeyAction,
            setAllAction: SetAllAction,
            removeKeyAction: RemoveKeyAction,
            clearAction: ClearAction
        }
    })
