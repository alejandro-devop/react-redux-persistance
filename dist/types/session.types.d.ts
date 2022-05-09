export declare type SessionDefinitionType = {
    [k: string]: any;
};
export declare type SessionPayloadType = {
    key?: string;
    value?: any;
    defaultValue?: any;
    [k: string]: any;
};
export declare type ActionCreatorType = {
    type: SessionActionKeyType;
    payload?: SessionPayloadType;
};
export declare type SessionActionKeyType = '[session] / set_key' | '[session] / set_all' | '[session] / remove_key' | '[session] / clear';
export declare type ActionType = {
    type: SessionActionKeyType;
    payload?: SessionPayloadType;
};
export declare type SessionContextType = {
    store: any;
    setKey: (key: string, value: any) => void;
    setAll: (keys: {
        [k: string]: any;
    }) => void;
    removeKey: (key: string) => void;
    clear: (defValues: any) => void;
};
export declare type DriverStorageType = 'localStorage' | 'cookie';
