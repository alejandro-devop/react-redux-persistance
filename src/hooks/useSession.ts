import { useContext } from 'react'
import { SessionContext } from '../session-provider/SessionProviderContext'
import { SessionContextType } from '../types/session.types'

export const useSession = () => {
    const { clear, removeKey, setAll, setKey, store } = useContext(
        SessionContext
    ) as SessionContextType
    return { clear, removeKey, setAll, setKey, store }
}
