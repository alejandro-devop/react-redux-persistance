import { ActionType, SessionDefinitionType } from '../types/session.types'

const sessionReducer = (state: SessionDefinitionType = {}, action: ActionType) => {
    const { key, value, defaultValue } = action.payload || {}
    switch (action.type) {
        case '[session] / set_key':
            return { ...state, ...(key ? { [key]: value } : {}) }
        case '[session] / set_all':
            return { ...state, ...(action.payload || {}) }
        case '[session] / remove_key':
            if (key) {
                const copy = { ...state }
                delete copy[key]
                return copy
            }
            return state
        case '[session] / clear':
            if (defaultValue) {
                return defaultValue
            }
            return {}
        default:
            return { ...state }
    }
}

export default sessionReducer
