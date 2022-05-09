import Cookies from 'universal-cookie'
import { DriverStorageType } from '../types/session.types'
class StorageDriver {
    private driver: DriverStorageType

    private cookies: Cookies

    constructor() {
        this.cookies = new Cookies()
    }

    public setDriver = (driver: DriverStorageType) => {
        this.driver = driver
    }

    persistData = (data: any) => {
        if (this.driver === 'cookie') {
            this.cookies.set('app-session', JSON.stringify(data), {
                secure: true,
                httpOnly: true
            })
        } else {
            localStorage.setItem('app-session', JSON.stringify(data))
        }
    }
    getData = (): any => {
        let data: string | null = ''
        if (this.driver === 'cookie') {
            data = this.cookies.get('app-session')
            return data
        } else {
            data = localStorage.getItem('app-session')
            return data ? JSON.parse(data) : {}
        }
    }
}

export default new StorageDriver()
