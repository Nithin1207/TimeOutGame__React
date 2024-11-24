import { forwardRef } from "react"
import { createPortal } from "react-dom"

const ResultModel = forwardRef(function ({ result, targetTime }, ref) {
    return createPortal(

        <dialog ref={ref} className="result-modal">
            <h2>You{result}</h2>
            <p>The Target time <strong>{targetTime}</strong>Seconds</p>
            <p>You stopped the timer with <strong>X seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")

    )
})

export default ResultModel