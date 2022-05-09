import React from 'react';
import { Slice } from '@reduxjs/toolkit';
import { DriverStorageType } from '../types/session.types';
interface ReduxWrapperProps {
    children: React.ReactNode;
    initialValues?: any;
    slice: Slice;
    onDataChange: (data: any) => void;
    driver?: DriverStorageType;
}
declare const ReduxWrapper: React.FC<ReduxWrapperProps>;
export default ReduxWrapper;
