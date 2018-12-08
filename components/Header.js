import React from 'react'
import { compose, lifecycle } from 'recompose'
import Link from 'next/link'

const enhance = compose(
    lifecycle({
        componentDidMount() {
            $(window).on('load', () => {
                $('.js-mega-menu').HSMegaMenu({
                    event: 'hover',
                    pageContainer: $('.container'),
                    breakpoint: 767.98,
                    hideTimeOut: 0,
                })
            })

            $(document).on('ready', () => {
                // initialization of header
                $.HSCore.components.HSHeader.init($('#header'))
            })
        },
    }),
)


export default enhance(() =>
    <header id="header" className="u-header u-header--abs-top-md u-header--bg-transparent u-header--show-hide-md" data-header-fix-moment={500} data-header-fix-effect="slide">
        {/* Search */}
        <div id="searchPushTop" className="u-search-push-top">
            <div className="container position-relative">
                <div className="u-search-push-top__content">
                    {/* Close Button */}
                    <button type="button" className="close u-search-push-top__close-btn" aria-haspopup="true" aria-expanded="false" aria-controls="searchPushTop" data-unfold-type="jquery-slide" data-unfold-target="#searchPushTop">
                        <span aria-hidden="true">×</span>
                    </button>
                    {/* End Close Button */}
                    {/* Input */}
                    <form className="js-focus-state input-group input-group-lg">
                        <input type="search" className="form-control" placeholder="Search Front" aria-label="Search Front" />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-primary">Search</button>
                        </div>
                    </form>
                    {/* End Input */}
                    {/* Content */}
                    <div className="row d-none d-md-flex mt-7">
                        <div className="col-sm-6">
                            <strong className="d-block mb-2">Quick Links</strong>
                            <div className="row">
                                {/* List Group */}
                                <div className="col-6">
                                    <div className="list-group list-group-transparent list-group-flush list-group-borderless">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            Search Results List
                                        </a>
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            Search Results Grid
                                        </a>
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            About
                                        </a>
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            Services
                                        </a>
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            Invoice
                                        </a>
                                    </div>
                                </div>
                                {/* End List Group */}
                                {/* List Group */}
                                <div className="col-6">
                                    <div className="list-group list-group-transparent list-group-flush list-group-borderless">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            Profile
                                        </a>
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            User Contacts
                                        </a>
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            Reviews
                                        </a>
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <span className="fas fa-angle-right list-group-icon" />
                                            Settings
                                        </a>
                                    </div>
                                </div>
                                {/* End List Group */}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            {/* Banner */}
                            <div className="rounded u-search-push-top__banner">
                                <div className="d-flex align-items-center">
                                    <div className="u-search-push-top__banner-container">
                                        <img className="img-fluid u-search-push-top__banner-img" src="../../assets/img/mockups/img3.png" alt="Image Description" />
                                        <img className="img-fluid u-search-push-top__banner-img" src="../../assets/img/mockups/img2.png" alt="Image Description" />
                                    </div>
                                    <div>
                                        <div className="mb-4">
                                            <strong className="d-block mb-2">Featured Item</strong>
                                            <p>Create astonishing web sites and pages.</p>
                                        </div>
                                        <a className="btn btn-xs btn-soft-success transition-3d-hover" href="index.html">Apply Now <span className="fas fa-angle-right ml-2" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* End Banner */}
                        </div>
                    </div>
                    {/* End Content */}
                </div>
            </div>
        </div>
        {/* End Search */}
        <div className="u-header__section">
            <div className="container u-header__hide-content pt-2" />
            <div id="logoAndNav" className="container">
                {/* Nav */}
                <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
                    {/* Logo */}
                    <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="index.html" aria-label="Front">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="46px" height="46px" viewBox="0 0 46 46" xmlSpace="preserve" style={{ marginBottom: 0 }}>
                            <path fill="#3F7DE0" opacity=".65" d="M23,41L23,41c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18h11.3C38,5,41,8,41,11.7V23C41,32.9,32.9,41,23,41z" />
                            <path className="fill-info" opacity=".5" d="M28,35.9L28,35.9c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18l11.3,0C43,0,46,3,46,6.6V18C46,27.9,38,35.9,28,35.9z" />
                            <path className="fill-primary" opacity=".7" d="M18,46L18,46C8,46,0,38,0,28v0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6V28C35.9,38,27.9,46,18,46z" />
                            <path className="fill-white" d="M17.4,34V18.3h10.2v2.9h-6.4v3.4h4.8v2.9h-4.8V34H17.4z" />
                        </svg>
                        <span className="u-header__navbar-brand-text">Front</span>
                    </a>
                    {/* End Logo */}
                    {/* Responsive Toggle Button */}
                    <button type="button" className="navbar-toggler btn u-hamburger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                        <span id="hamburgerTrigger" className="u-hamburger__box">
                            <span className="u-hamburger__inner" />
                        </span>
                    </button>
                    {/* End Responsive Toggle Button */}
                    {/* Navigation */}
                    <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
                        <ul className="navbar-nav u-header__navbar-nav">
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/services">
                                    <a>
                                        Services
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/about">
                                    <a>
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/news">
                                    <a>
                                        News
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/help">
                                    <a>
                                        Help
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/contact">
                                    <a>
                                        Contact us
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/contact">
                                    <a>
                                        Contact us
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/login">
                                    <a className="btn btn-sm btn-primary transition-3d-hover">
                                        login
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item u-header__nav-last-item">
                                <Link href="/login">
                                    <a className="btn btn-sm btn-primary transition-3d-hover">
                                        Register
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* End Navigation */}
                </nav>
                {/* End Nav */}
            </div>
        </div>
    </header>)
