import React, { useState } from 'react'

const HigherOrderCom = (WrappedComponent) => {

    function main() {
        let [count, setCount] = useState(0)

        const handlleIncrease = () => {
            setCount(count + 1)
        }

        return <WrappedComponent count={count} handlleIncrease={handlleIncrease} />

    }
    return main

}

export default HigherOrderCom