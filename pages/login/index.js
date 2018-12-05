import React from 'react'
import { compose } from 'recompose'
import { page } from '../../hoc'
import { translate } from 'react-i18next'
const enhance = compose(
    page,
    translate(['common']),
)

export default enhance(props => <div>
    {`${props.t('hello')} `} 
    Login
</div>)
