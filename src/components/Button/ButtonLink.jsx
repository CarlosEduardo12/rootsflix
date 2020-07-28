import React from 'react'

function ButtomLink(props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtomLink; 