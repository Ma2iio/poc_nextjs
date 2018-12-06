import React from 'react'
import { compose } from 'recompose'
import { observer, inject } from 'mobx-react'

const enhance = compose(
    inject('store'),
    observer,
)

export default enhance(props => <div>{`${props.store.visible}`}</div>)
