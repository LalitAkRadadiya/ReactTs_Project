import React from 'react'

const C1 = (props) => {
    let showDate=true;
    let cart;
    return (
        <div>
    Date-- <h2>today date { showDate && new Date().toString()}</h2>    
        <h2>FROM C1 --{props.demo}</h2>
        </div>
    )
}

export default C1
