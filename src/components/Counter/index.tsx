import { useState } from 'react'
import './counter.scss'

export function Counter() {
    const [counter, setCounter] = useState(0)

    function getModifier() {
        if(counter > 0) return "positive"
        if(counter < 0) return "negative"
    }

    return (
        <div className="counter">
            <h1 className={`title ${getModifier()}`}>{counter}</h1>
            <div className="wrapper">
                <button
                    type="button"
                    className="decrement"
                    onClick={() => setCounter(counter - 1)}
                >Decrementar</button>
                <button
                    type="button"
                    className="increment"
                    onClick={() => setCounter(counter + 1)}
                >Incrementar</button>
            </div>
        </div>
    )
}