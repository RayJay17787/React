import React from 'react'

export default function Alert(props) {
    let capitalize = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show col-12 col-md-12`} role="alert">
            {props.alert.msg}
        </div>
    )
}
