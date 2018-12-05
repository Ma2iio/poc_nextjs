import { observable } from 'mobx'

let store = null

class Store {
    @observable lastUpdate = 0

    constructor(isServer, lastUpdate) {
        this.lastUpdate = lastUpdate
    }
}

const initializeStore = (isServer, lastUpdate = Date.now()) => {
    if (isServer) {
        return new Store(isServer, lastUpdate)
    }

    if (store === null) {
        store = new Store(isServer, lastUpdate)
    }
    return store
}

export default initializeStore
