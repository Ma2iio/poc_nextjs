const prod = process.env.NODE_ENV === 'production'

console.log(prod)

module.exports = {
    env: {
        SERVICE_ENDPOINT: 'https://dev-api.vertobase.com:8443/api/',
    },
}
