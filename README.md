# @alejandro.devop/redux-persistance

## Index
* [Installation](#installation)
* [Usage](#usage)


### Installation

```
yarn add @alejandro.devop/redux-persistance
```


### Usage

```tsx
// myComponent.tsx

/**
 * Use `useSession` hook to connect directly to the context and access
 * the store, the store contains all variables sotored in your redux context
 * - Use `setKey` function to change or create a new session variable value
 * - Use `setAll` function to change multiple states or create multiple session variables
 * Note: The session variables are persisted in  your local storage every time redux updates itself
 */
import {useSession} from '@triko/redux-persistance'

const MyComponent: React.FC = () => {
    const {store, setKey, setAll} = useSession()

    const handleSetSessionVar = () => {
        setKey("newKey", 12)
    }

    const handleMultipleKeys = () => {
        setAll({
            mySessionVar: "new value",
            newKey: 1212
        })
    }

    const {mySessionVar} = store

    return (
        <div>
            <button onClick={() => handleSetSessionVar()}>setKey</button>
            <button onClick={() => handleMultiple()}>setMultiple</button>
            <p>{mySessionVar}</p>
        </div>
    )
}

// app.tsx

/**
 * It all starts by opening the session context, make sure your provider
 * wrapps all the components which should access to the session content
 */
import SessionProvider from '@triko/redux-persistance'

const MyApp: React.FC = () => {
    return (
        <SessionProvider
            initialValues={{
                mySessionVar: "Simple ussage"
            }}
        >
            <div>my app content</div>
        </SessionProvider>
    )
}

export default MyApp
