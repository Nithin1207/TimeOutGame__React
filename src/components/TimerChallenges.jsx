import { useState, useRef } from "react"
import ResultModel from "./ResultModel"

export default function TimerChallenges({ title, targetTime }) {
    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, settimerStarted] = useState(false)

    let timer = useRef()
    let dialog = useRef()
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialog.current.showModal()
        }, targetTime * 1000)

        settimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <>
            < ResultModel ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second
                </p>
                <p><button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button></p>
                <p className={timerStarted ? "active" : ""}>{timerStarted ? "Timer is Running..." : "Timer inactive"}</p>
            </section>
        </>
    )
}