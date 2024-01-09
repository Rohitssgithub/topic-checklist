import React from 'react'
import HigherOrderCom from './HigherOrderCom'

const ComB = ({ handlleIncrease, count }) => {
    return (
        <>
            <p>{count}</p>
            <button onMouseOver={handlleIncrease}>Clicks</button>
        </>
    )
}

export default HigherOrderCom(ComB)