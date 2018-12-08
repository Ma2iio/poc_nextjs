import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/auth'

// Setup Api Gateway
const ServiceInstance = axios.create({
    baseURL: env.SERVICE_ENDPOINT,
})
ServiceInstance.defaults.headers.post['Content-Type'] = 'application/json'
const ServiceGateWay = {
    login: params => ServiceInstance.post('/auth/login', params),
    getUser: () => ServiceInstance.get('/user/profile'),
}
export {
    ServiceInstance,
    ServiceGateWay,
}


// Setup Firebase
const config = {
    apiKey: env.fIREBASE_CONFIG.API_KEY,
    authDomain: env.fIREBASE_CONFIG.AUTH_DOMAIN,
    databaseURL: env.fIREBASE_CONFIG.DATABASE_URL,
    projectId: env.fIREBASE_CONFIG.PROJECT_ID,
    storageBucket: env.fIREBASE_CONFIG.STORAGE_BUCKET,
    messagingSenderId: env.fIREBASE_CONFIG.MESSAGING_SENDER_ID,
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const firebaseAuth = firebase.auth()

export {
    firebase,
    firebaseAuth,
}
