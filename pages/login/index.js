import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { withNamespaces } from 'react-i18next'
import { inject } from 'mobx-react'
import Router from 'next/router'
import { page } from '../../hoc'

const enhance = compose(
    page,
    inject('store'),
    withNamespaces(['common']),
    withState('userInfo', 'setUserInfo', {}),
    withHandlers({
        handleChangeUserInfo: props => (event, key) => {
            const { target: { value } } = event
            props.setUserInfo(state => ({
                ...state,
                [key]: value,
            }))
        },
        handleLogin: props => async () => {
            try {
                await props.store.login(props.userInfo)
                Router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
    }),
)

export default enhance(props =>
    <main id="content" role="main">
        {/* Form */}
        <div className="d-flex align-items-center position-relative height-lg-100vh">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-3 space-lg-0">
                        {/* Form */}
                        <div className="js-validate mt-5">
                            {/* Title */}
                            <div className="mb-7">
                                <h2 className="h3 text-primary font-weight-normal mb-0">Welcome <span className="font-weight-semi-bold">back</span></h2>
                                <p>Login to manage your account.</p>
                            </div>
                            {/* End Title */}
                            {/* Form Group */}
                            <div className="js-form-message form-group">
                                <label className="form-label" htmlFor="signinSrEmail">Email address</label>
                                <input
                                    required
                                    type="email"
                                    className="form-control"
                                    name="email" id="signinSrEmail"
                                    placeholder="Email address"
                                    aria-label="Email address"
                                    data-msg="Please enter a valid email address."
                                    data-error-class="u-has-error"
                                    data-success-class="u-has-success"
                                    onChange={event => props.handleChangeUserInfo(event, 'email')}
                                />
                            </div>
                            {/* End Form Group */}
                            {/* Form Group */}
                            <div className="js-form-message form-group">
                                <label className="form-label" htmlFor="signinSrPassword">
                                    <span className="d-flex justify-content-between align-items-center">
                                        Password
                                        <a className="link-muted text-capitalize font-weight-normal" href="recover-account.html">Forgot Password?</a>
                                    </span>
                                </label>
                                <input
                                    required
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="signinSrPassword"
                                    placeholder="********"
                                    aria-label="********"
                                    data-msg="Your password is invalid. Please try again."
                                    data-error-class="u-has-error"
                                    data-success-class="u-has-success"
                                    onChange={event => props.handleChangeUserInfo(event, 'password')}
                                />
                            </div>
                            {/* End Form Group */}
                            {/* Button */}
                            <div className="row align-items-center mb-5">
                                <div className="col-6">
                                    <span className="small text-muted">Do not have an account?</span>
                                    <a className="small" href="signup.html">Signup</a>
                                </div>
                                <div className="col-6 text-right">
                                    <button className="btn btn-primary transition-3d-hover" onClick={props.handleLogin}>Login</button>
                                </div>
                            </div>
                            {/* End Button */}
                        </div>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </div>
        {/* End Form */}
    </main>)
