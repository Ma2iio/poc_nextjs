import React from 'react'
import { compose } from 'recompose'
import { withNamespaces } from 'react-i18next'
import { inject } from 'mobx-react'

import { page } from '../../hoc'

const enhance = compose(
    page,
    inject('store'),
    withNamespaces(['common']),
)

export default enhance(props =>
    <div>
        {/* {`${props.t('hello')} `} */}
        Login
        <span className="fas fa-stroopwafel" />
        <button onClick={() => props.store.setVisible(!props.store.visible)}> Click1 </button>
        <div className="h1">Example heading <span className="badge badge-secondary">New</span></div>
    </div>)
