import React from 'react'
import { compose } from 'recompose'
import { page } from '../hoc'

const enhance = compose(page)

export default enhance(() =>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
    </div>)
