class StorageDriver {
    persistData = (data: any) => {
        localStorage.setItem('app-session', JSON.stringify(data))
    }
    getData = (): any => {
        const data = localStorage.getItem('app-session')
        if (data) {
            return JSON.parse(data)
        }
        return {}
    }
}

export default new StorageDriver()
