import React from 'react';
import { Slice } from '@reduxjs/toolkit';
interface ReduxWrapperProps {
    children: React.ReactNode;
    initialValues?: any;
    slice: Slice;
    onDataChange: (data: any) => void;
}
declare const ReduxWrapper: React.FC<ReduxWrapperProps>;
export default ReduxWrapper;
