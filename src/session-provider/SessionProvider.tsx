import React from 'react'
import ReduxWrapper from './ReduxWrapper'
import { Provider } from 'react-redux'
import { createSessionSlice } from '../store/session.slices'
import { configureStore } from '@reduxjs/toolkit'
import storageDriver from './StorageDriver'

interface SessionProviderProps {
    children: React.ReactNode
    initialValues?: { [k: string]: any }
}

const SessionProvider: React.FC<SessionProviderProps> = ({ children, initialValues }) => {
    const storedData = storageDriver.getData()
    const slice = createSessionSlice({ initialValues: { ...initialValues, ...storedData } })
    const store = configureStore({
        reducer: slice.reducer
    })
    const onDataChange = (newData: any) => {
        storageDriver.persistData(newData)
    }
    return (
        <Provider store={store}>
            <ReduxWrapper
                slice={slice}
                initialValues={{ ...initialValues }}
                onDataChange={onDataChange}
            >
                {children}
            </ReduxWrapper>
        </Provider>
    )
}

export default SessionProvider
