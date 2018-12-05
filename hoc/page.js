import React from 'react'
import { compose } from 'recompose'

const enhance = compose()

export default WrapperComponent => enhance((props) => {
    return (
        <WrapperComponent {...props} />
    )
})
