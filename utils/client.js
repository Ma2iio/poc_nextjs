import axios from 'axios'

// Setup Api Gateway
const ServiceInstance = axios.create({
    baseURL: env.SERVICE_ENDPOINT,
    timeout: 20000,
})
ServiceInstance.defaults.headers.post['Content-Type'] = 'application/json'
// ServiceInstance.defaults.headers.common['X-API-KEY'] = 'l487kBwGEf09JmSF02Q5wVnuXcTHvZYz'
const ServiceGateWay = {
    login: params => ServiceInstance.post('/auth/login', params),
    getUser: () => ServiceInstance.post('/user/profile'),
}
export {
    ServiceInstance,
    ServiceGateWay,
}
