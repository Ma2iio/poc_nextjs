import React from 'react'
import { compose } from 'recompose'
import { withNamespaces } from 'react-i18next'
import { inject } from 'mobx-react'

import { page } from '../../hoc'
import Modal from '../../components/Modal'

const enhance = compose(
    page,
    inject('store'),
    withNamespaces(['common']),
)

export default enhance(props =>
    <div>
        {/* {`${props.t('hello')} `} */}
        Login
        <button onClick={() => props.store.setVisible(!props.store.visible)}> Click1 </button>
        <Modal />
    </div>)
