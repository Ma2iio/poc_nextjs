import React, { Fragment } from 'react'
import { compose } from 'recompose'
import Link from 'next/link'

const enhance = compose()

export default WrapperComponent => enhance((props) => {
    return (
        <Fragment>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link href="/album">
                        <a className="p-2 text-dark" href="#">Album</a>
                    </Link>
                    <Link href="/pricing">
                        <a className="p-2 text-dark" href="#">Pricing</a>
                    </Link>
                    <Link href="/login">
                        <a className="p-2 text-dark" href="#">Login</a>
                    </Link>
                </nav>
                <a className="btn btn-outline-primary" href="#">Sign up</a>
            </div>
            <WrapperComponent {...props} />
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <img className="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                        <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Cool stuff</a></li>
                            <li><a className="text-muted" href="#">Random feature</a></li>
                            <li><a className="text-muted" href="#">Team feature</a></li>
                            <li><a className="text-muted" href="#">Stuff for developers</a></li>
                            <li><a className="text-muted" href="#">Another one</a></li>
                            <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Resource</a></li>
                            <li><a className="text-muted" href="#">Resource name</a></li>
                            <li><a className="text-muted" href="#">Another resource</a></li>
                            <li><a className="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="#">Locations</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
})
