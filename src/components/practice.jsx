import { useState, useEffect } from "react"

function Practice() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("countが変更されました")
    }, [count])

    return (
        <>
            <h2>Day9 useEffect</h2>
            
            <h3>{count}</h3>

            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
        </>
    )
}

export default Practice