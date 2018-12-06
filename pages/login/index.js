import React from 'react'
import { compose, withState } from 'recompose'
import { withNamespaces } from 'react-i18next'
import { inject } from 'mobx-react'

import { page } from '../../hoc'
import Modal from '../../components/Modal'

// class Login extends React.Component {
//     state = {
//         cat: 123,
//     }

//     clickMe = () => {
//         this.setState(() => ({ cat: 5555 }))
//     }

//     render() {
//         console.log(this.state)
//         return <Button name="push here" clickMe={this.clickMe} />
//     }
// }

// export default Login

const enhance = compose(
    page,
    inject('store'),
    withNamespaces(['common']),
    withState('cat', 'setCat', 0),
)

export default enhance(props =>
    <div>
        {/* {`${props.t('hello')} `} */}
        Login
        <button onClick={() => props.store.setVisible(!props.store.visible)}> Click </button>
        <Modal />
    </div>)
