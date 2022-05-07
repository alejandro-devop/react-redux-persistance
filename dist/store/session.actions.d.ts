import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
declare type State = any;
export declare const SetKeyAction: CaseReducer<State, PayloadAction<{
    key: string;
    value?: any;
}>>;
export declare const SetAllAction: CaseReducer<State, PayloadAction<{
    [k: string]: any;
}>>;
export declare const RemoveKeyAction: CaseReducer<State, PayloadAction<{
    key: string;
}>>;
export declare const ClearAction: CaseReducer<State, PayloadAction<{
    defaultValues?: {
        [k: string]: any;
    };
}>>;
export {};
