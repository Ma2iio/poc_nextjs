import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import getTranslation from '../utils/translationHelpers'
import { withMobx } from '../hoc'
import startI18n from '../utils/i18n'

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
                    <title>Trex</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link rel="stylesheet" href="/static/theme/vendor/font-awesome/css/fontawesome-all.min.css" />
                    <link rel="stylesheet" href="/static/theme/vendor/animate.css/animate.min.css" />
                    <link rel="stylesheet" href="/static/theme/vendor/hs-megamenu/src/hs.megamenu.css" />
                    <link rel="stylesheet" href="/static/theme/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css" />
                    <link rel="stylesheet" href="/static/theme/vendor/fancybox/jquery.fancybox.css" />
                    <link rel="stylesheet" href="/static/theme/vendor/slick-carousel/slick/slick.css" />
                    <link rel="stylesheet" href="/static/theme/css/theme.css" />

                    <script src="/static/theme/vendor/jquery/dist/jquery.min.js" />
                    <script src="/static/theme/vendor/popper.js/dist/umd/popper.min.js" />
                    <script src="/static/theme/vendor/bootstrap/bootstrap.min.js" />
                    <script src="/static/theme/vendor/hs-megamenu/src/hs.megamenu.js" />

                    <script src="/static/theme/js/hs.core.js" />
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
