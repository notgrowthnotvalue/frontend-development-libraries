import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    const date = new Date()
    const hours = data.getHours() % 12
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div>
            <h1>Hello {firstName} {lastName}!</h1>
            <h3>It is about {hours} o'clock.</h3>
            <h3>Good {timeOfDay}</h3>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))