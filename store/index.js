import { observable, action } from 'mobx'
import { ServiceGateWay, ServiceInstance, firebase } from '../utils/client'
import StorageManager from '../utils/StorageManager'

let store = null


class Store {
    @observable lastUpdate = 0

    @observable user = null

    @observable userInfo = null

    constructor(isServer, lastUpdate) {
        this.lastUpdate = lastUpdate
        ServiceInstance.defaults.headers.common['Authorization'] = StorageManager.getToken()
        this.auth()
    }

    @action async logIn(userInfo) {
        try {
            const responseUser = await ServiceGateWay.login(userInfo)
            const { data: { token } } = responseUser
            await firebase.auth().signInWithCustomToken(token)
            this.auth()
        } catch (error) {
            throw new Error(error)
        }
    }

    @action async logOut() {
        try {
            this.userInfo = null
            StorageManager.setToken()
            await firebase.auth().signOut()
        } catch (error) {
            throw new Error(error)
        }
    }

    @action async auth() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const token = await user.getIdToken(true)
                StorageManager.setToken(token)
                ServiceInstance.defaults.headers.common['Authorization'] = token
                this.user = user
            } else {
                this.logOut()
            }
        })
        await this.getProfile()
    }

    @action async getProfile() {
        try {
            const response = await ServiceGateWay.getUser()
            const { data: { user } } = response
            this.userInfo = user
        } catch (error) {
            console.log(error)
        }
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
