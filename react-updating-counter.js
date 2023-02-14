import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = React.useState(0)

    function addCount() {
        setCount(count + 1)
    }
    function removeCount() {
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={removeCount}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={addCount}>+</button>
        </div>
    )
}
