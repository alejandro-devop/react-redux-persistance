import React from 'react';
import { DriverStorageType } from '../types/session.types';
interface SessionProviderProps {
    children: React.ReactNode;
    initialValues?: {
        [k: string]: any;
    };
    driver?: DriverStorageType;
}
declare const SessionProvider: React.FC<SessionProviderProps>;
export default SessionProvider;
