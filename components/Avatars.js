import React from 'react'


const Normal = ({
    size,
    src,
    alt,
    classExtend = '',
}) => {
    const isSize = !!size
    return <img className={`u-${isSize ? `${size}-` : ''}avatar ${classExtend}`} src={src} alt={alt} />
}

const Bordered = ({
    size,
    src,
    alt,
    classExtend = '',
}) => {
    const isSize = !!size
    return <img className={`u-${isSize ? `${size}-` : ''}avatar ${`u-${isSize ? `${size}-` : ''}-avatar--bordered`} ${classExtend}`} src={src} alt={alt} />
}


export default {
    Normal,
    Bordered,
}
