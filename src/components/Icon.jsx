import React from 'react'

export default props => {
    return(
        <React.Fragment>
            <i className={`fa fa-${props.icon}`}></i>
        </React.Fragment>
    )
}