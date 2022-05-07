declare type SliceOptionsType = {
    initialValues?: {
        [k: string]: any;
    };
};
export declare const createSessionSlice: ({ initialValues }: SliceOptionsType) => import("@reduxjs/toolkit").Slice<{
    [k: string]: any;
} | undefined, {
    setKeyAction: import("@reduxjs/toolkit").CaseReducer<any, {
        payload: {
            key: string;
            value?: any;
        };
        type: string;
    }>;
    setAllAction: import("@reduxjs/toolkit").CaseReducer<any, {
        payload: {
            [k: string]: any;
        };
        type: string;
    }>;
    removeKeyAction: import("@reduxjs/toolkit").CaseReducer<any, {
        payload: {
            key: string;
        };
        type: string;
    }>;
    clearAction: import("@reduxjs/toolkit").CaseReducer<any, {
        payload: {
            defaultValues?: {
                [k: string]: any;
            } | undefined;
        };
        type: string;
    }>;
}, "session">;
export {};
