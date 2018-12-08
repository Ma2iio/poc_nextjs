import React from 'react'
import { compose } from 'recompose'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import { page } from '../hoc'

const enhance = compose(
    page,
    inject('store'),
    observer,
)

export default enhance(props =>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        {console.log(toJS(props.store.userInfo))}
        <h1 className="display-4">Pricing</h1>
    </div>)
