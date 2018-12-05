import { action, observable } from 'mobx'

let store = null

class Store {
    @observable lastUpdate = 0

    constructor(isServer, lastUpdate) {
        this.lastUpdate = lastUpdate
    }

}

export function initializeStore(isServer, lastUpdate = Date.now()) {
    if (isServer) {
        return new Store(isServer, lastUpdate)
    } else {
        if (store === null) {
            store = new Store(isServer, lastUpdate)
        }
        return store
    }
}
