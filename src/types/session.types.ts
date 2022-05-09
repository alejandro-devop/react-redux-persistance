export type SessionDefinitionType = {
    [k: string]: any
}

export type SessionPayloadType = {
    key?: string
    value?: any
    defaultValue?: any
    [k: string]: any
}

export type ActionCreatorType = {
    type: SessionActionKeyType
    payload?: SessionPayloadType
}

export type SessionActionKeyType =
    | '[session] / set_key'
    | '[session] / set_all'
    | '[session] / remove_key'
    | '[session] / clear'

export type ActionType = {
    type: SessionActionKeyType
    payload?: SessionPayloadType
}

export type SessionContextType = {
    store: any
    setKey: (key: string, value: any) => void
    setAll: (keys: { [k: string]: any }) => void
    removeKey: (key: string) => void
    clear: (defValues: any) => void
}

export type DriverStorageType = 'localStorage' | 'cookie'
