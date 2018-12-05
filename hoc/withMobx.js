import React, { Component } from 'react'
import initializeStore from '../store'

const isServer = typeof window === 'undefined'
const NEXTMOBXSTORE = '__NEXT_MOBX_STORE__'

function getOrCreateStore(initialState) {
    if (isServer) {
        return initializeStore(initialState)
    }

    if (!window[NEXTMOBXSTORE]) {
        window[NEXTMOBXSTORE] = initializeStore(initialState)
    }
    return window[NEXTMOBXSTORE]
}

export default App => class extends Component {
    static async getInitialProps(context) {
        const mobxStore = getOrCreateStore()
        const appContext = context
        appContext.ctx.mobxStore = mobxStore

        let appProps = {}
        if (typeof App.getInitialProps === 'function') {
            appProps = await App.getInitialProps.call(App, appContext)
        }

        return {
            ...appProps,
            initialMobxState: mobxStore,
        }
    }

    constructor(props) {
        super(props)
        this.mobxStore = getOrCreateStore(props.initialMobxState)
    }

    render() {
        return <App {...this.props} mobxStore={this.mobxStore} />
    }
}
