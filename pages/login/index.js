import React from 'react'
import { compose } from 'recompose'
import { withNamespaces } from 'react-i18next'
import { page } from '../../hoc'

const enhance = compose(
    page,
    withNamespaces(['common']),
)

export default enhance(props => <div>
    {`${props.t('hello')} `}
    Login
</div>)
