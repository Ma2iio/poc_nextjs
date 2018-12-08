import React, { Fragment } from 'react'


const Normal = ({ color, children, classExtend = '' }) => (
    <div className={`alert alert-${color || 'primary'} ${classExtend}`} role="alert">
        {children}
    </div>)

const Heading = ({ head: Head, children, classExtend = '' }) => (
    <Fragment>
        {React.cloneElement(Head, { className: `alert-heading ${classExtend}`, children })}
    </Fragment>)

const Text = ({ head: Head, children, classExtend = '' }) => (
    <Fragment>
        {React.cloneElement(Head, { className: `alert-text ${classExtend}`, children })}
    </Fragment>)
export default {
    Normal,
    Heading,
    Text,
}
