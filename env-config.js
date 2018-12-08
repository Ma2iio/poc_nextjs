const prod = process.env.NODE_ENV === 'production'

console.log(prod)

module.exports = {
    env: {
        SERVICE_ENDPOINT: 'https://dev-api.vertobase.com:8443/api/',
        fIREBASE_CONFIG: {
            API_KEY: 'AIzaSyBnqhevW4gnficuRKNzGqSMB98dkChwEbk',
            AUTH_DOMAIN: 'vertocol-214303.firebaseapp.com',
            DATABASE_URL: 'https://vertocol-214303.firebaseio.com',
            PROJECT_ID: 'vertocol-214303',
            STORAGE_BUCKET: 'vertocol-214303.appspot.com',
            MESSAGING_SENDER_ID: '982124866904',
        },
    },
}
