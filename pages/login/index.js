import React from 'react'
import { compose } from 'recompose'
import { page } from '../../hoc'
import { withNamespaces } from 'react-i18next'
const enhance = compose(
    page,
    withNamespaces(['common']),
)

export default enhance(props =>
    <div>
        {`${props.t('hello')} `}
        Login
    </div>
)
