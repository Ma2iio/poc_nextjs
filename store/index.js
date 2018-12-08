import { observable, action } from 'mobx'
import { ServiceGateWay, ServiceInstance } from '../utils/client'
import StorageManager from '../utils/StorageManager'

let store = null

class Store {
    @observable lastUpdate = 0

    @observable visible = true

    constructor(isServer, lastUpdate) {
        this.lastUpdate = lastUpdate
        ServiceInstance.defaults.headers.common['Authorization'] = StorageManager.getToken()
        this.getUser()
    }

    @action setVisible(status) {
        this.visible = status
    }

    @action async login(userInfo) {
        try {
            const responseUser = await ServiceGateWay.login(userInfo)
            const { data: { token } } = responseUser
            ServiceInstance.defaults.headers.common['Authorization'] = token
            StorageManager.setToken(token)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getUser() {
        const responseUser = await ServiceGateWay.getUser()
        console.log(responseUser)
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
