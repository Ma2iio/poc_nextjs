import React from 'react'

import {
    Alerts,
    Avatars,
} from '../components'

export default () => (
    <div>
        <Alerts.Normal>
            123
        </Alerts.Normal>

        <Alerts.Normal color="primary">
            <Alerts.Heading head={<h4 />}>
                Well done!
            </Alerts.Heading>
            <Alerts.Text head={<p />}>
                Aww yeah, you successfully read this important alert message.
            </Alerts.Text>
            <hr />
            <Alerts.Text head={<p />} classExtend="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
            </Alerts.Text>
        </Alerts.Normal>
        <Avatars.Normal src="https://eslint.org/img/logo.svg" alt="123" />
    </div>
)
