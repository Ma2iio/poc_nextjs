import store from 'store'
import engine from 'store/src/store-engine'
import sessionStorage from 'store/storages/sessionStorage'

const session = engine.createStore([sessionStorage])

const setItem = key => (value, sessionOnly) => {
    const isValue = !!value
    if (!isValue) { // Check value when set null to remove value
        if (store.get(key)) {
            return store.remove(key)
        }
        if (session.get(key)) {
            return session.remove(key)
        }
        return {}
    }

    if (sessionOnly) {
        return session.set(key, { value })
    }
    return store.set(key, { value })
}
const getItem = key => () => {
    let value
    value = process.browser && session.get(key) && session.get(key).value
    if (!value) {
        value = store.get(key) && store.get(key).value
    }
    return value
}

const StorageManager = {
    setToken: setItem('token'),
    getToken: getItem('token'),
    setUser: setItem('user'),
    getUser: getItem('user'),
}

export default StorageManager
