import React, { Fragment } from 'react'
import { compose } from 'recompose'
import {
    Header,
} from '../components'

const enhance = compose()

export default WrapperComponent => enhance((props) => {
    return (
        <Fragment>
            <Header />
            <WrapperComponent {...props} />
        </Fragment>
    )
})
