import { observable, action } from 'mobx'

let store = null

class Store {
    @observable lastUpdate = 0

    @observable visible = true

    constructor(isServer, lastUpdate) {
        this.lastUpdate = lastUpdate
    }

    @action setVisible(status) {
        this.visible = status
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
