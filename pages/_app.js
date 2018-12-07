import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import getTranslation from '../utils/translationHelpers'
import { withMobx } from '../hoc'
import startI18n from '../utils/i18n'

import '../theme/css/theme.css'
import '../theme/vendor/font-awesome/css/fontawesome-all.min.css'

export default
@withMobx
class extends App {
    static async getInitialProps() {
        const translations = await getTranslation(
            'th',
            ['common'],
            'http://localhost:3000/static/locales/',
        )
        return { translations }
    }

    constructor(props) {
        super(props)
        const { router: { query: { lang = 'en' } } } = props
        this.i18n = startI18n(props.translations, lang)
    }

    render() {
        const { i18n } = this
        const { Component, pageProps, mobxStore } = this.props

        return (
            <Container>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Provider store={mobxStore}>
                    <I18nextProvider i18n={i18n}>
                        <Component {...pageProps} />
                    </I18nextProvider>
                </Provider>
            </Container>
        )
    }
}
