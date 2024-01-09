import React from 'react'
import HigherOrderCom from './HigherOrderCom'

const ComA = ({handlleIncrease,count}) => {
    return (
        <>
        <p>{count}</p>
        <button onClick={handlleIncrease}>Clicks</button>
        </>
    )
}

export default HigherOrderCom(ComA)