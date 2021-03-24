import React from 'react'
import './Button.css'

function Button({ label, icon }) {
    return (
        <div className="button">
            {icon}
            <span className="button__label">
                {label}
            </span>
        </div>
    )
}

export default Button
