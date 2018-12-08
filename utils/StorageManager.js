import store from 'store'
import engine from 'store/src/store-engine'
import sessionStorage from 'store/storages/sessionStorage'

const session = engine.createStore([sessionStorage])

const setItem = key => (value, sessionOnly) => {
    const isValue = !!value
    console.log('value', value)
    console.log('isValue', isValue)
    if (!isValue) { // Check value when set null to remove value
        if (store.get(key)) {
            console.log('StorageService: Remove localStorage:', key)
            store.remove(key)
        }
        if (session.get(key)) {
            console.log('StorageService: Remove sessionStorage:', key)
            session.remove(key)
        }
    } else {
        let result
        if (sessionOnly) {
            result = session.set(key, { value })
        } else {
            result = store.set(key, { value })
        }
        console.log(`StorageService: set '${key}'`, result)
    }
}
const getItem = key => () => {
    let value
    value = process.browser && session.get(key) && session.get(key).value
    if (!value) {
        value = store.get(key) && store.get(key).value
    }
    console.log(`StorageService: get '${key}'`, value)
    return value
}

const StorageManager = {
    setToken: setItem('token'),
    getToken: getItem('token'),
    setUser: setItem('user'),
    getUser: getItem('user'),
}

export default StorageManager
