import { DriverStorageType } from '../types/session.types';
declare class StorageDriver {
    private driver;
    private cookies;
    constructor();
    setDriver: (driver: DriverStorageType) => void;
    persistData: (data: any) => void;
    getData: () => any;
}
declare const _default: StorageDriver;
export default _default;
