import React from 'react'
import { tw } from 'twind'
import PropTypes from 'prop-types'

const Button = ({text,color,onClick}) => {
    return (
        <button onClick={onClick} className={tw`my-btn bg-gradient-to-r from-${color}-400 to-${color}-600`}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button
