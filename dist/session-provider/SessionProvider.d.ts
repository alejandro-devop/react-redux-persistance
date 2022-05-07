import React from 'react';
interface SessionProviderProps {
    children: React.ReactNode;
    initialValues?: {
        [k: string]: any;
    };
}
declare const SessionProvider: React.FC<SessionProviderProps>;
export default SessionProvider;
