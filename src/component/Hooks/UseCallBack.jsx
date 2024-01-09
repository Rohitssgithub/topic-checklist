import React, { useState, useMemo, useCallback } from 'react'
import Child from './Child'

const UseCallBack = () => {
    let [data, setData] = useState(0);

    const handleSubmit = () => {
        setData(data + 1)
    }

    // const handleSubmit = useCallback(() => {
    //     setData(data + 1)
    // }, [data])

    return (
        <>
            <button onClick={handleSubmit}>Click</button>
            <p>{data}</p>
            <Child />
        </>
    )
}

export default UseCallBack