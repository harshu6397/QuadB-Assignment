import React from 'react'

export default function SelfDismissAlert(props) {
    return (
        props.alert && <div className={`alert alert-success alert-dismissible fade show my-3`} style={{textAlign: 'center'}} role="alert">
            {props.alert.msg}
        </div>
    )
}
