import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Slice } from '@reduxjs/toolkit'

import { SessionContextProvider } from './SessionProviderContext'
import { DriverStorageType } from '../types/session.types'

interface ReduxWrapperProps {
    children: React.ReactNode
    initialValues?: any
    slice: Slice
    onDataChange: (data: any) => void
    driver?: DriverStorageType
}

const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children, slice, onDataChange, driver }) => {
    const dispatch = useDispatch()
    const store = useStore()
    const currentState: any = useSelector((state) => {
        return state
    })
    const { clearAction, removeKeyAction, setAllAction, setKeyAction } = slice.actions

    const setKey = (key: string, value: any) => {
        dispatch(setKeyAction({ key, value }))
    }

    const setAll = (keys: { [k: string]: any }) => {
        dispatch(setAllAction(keys))
    }

    const removeKey = (key: string) => {
        dispatch(removeKeyAction({ key }))
    }

    const clear = (defaultValues?: any) => {
        dispatch(clearAction({ defaultValues }))
    }

    store.subscribe(() => {
        onDataChange(store.getState())
    })

    return (
        <SessionContextProvider
            value={{
                driver,
                setKey,
                setAll,
                removeKey,
                clear,
                store: currentState
            }}
        >
            {children}
        </SessionContextProvider>
    )
}

export default ReduxWrapper
