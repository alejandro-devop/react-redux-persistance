export declare const useSession: () => {
    clear: (defValues: any) => void;
    removeKey: (key: string) => void;
    setAll: (keys: {
        [k: string]: any;
    }) => void;
    setKey: (key: string, value: any) => void;
    store: any;
};
