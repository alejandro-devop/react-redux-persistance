import React from 'react'
import ReduxWrapper from './ReduxWrapper'
import { Provider } from 'react-redux'
import { createSessionSlice } from '../store/session.slices'
import { configureStore } from '@reduxjs/toolkit'
import storageDriver from './StorageDriver'
import { DriverStorageType } from '../types/session.types'

interface SessionProviderProps {
    children: React.ReactNode
    initialValues?: { [k: string]: any }
    driver?: DriverStorageType
}

const SessionProvider: React.FC<SessionProviderProps> = ({ children, initialValues, driver }) => {
    storageDriver.setDriver(driver || 'localStorage')
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
                driver={driver}
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
