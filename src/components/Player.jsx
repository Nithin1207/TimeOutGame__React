import { useState, useRef } from "react";

export default function Player() {
  let UserName = useRef()
  let [PlayerName, setPlayerName] = useState()

  function handleName() {
    setPlayerName(UserName.current.value)
    UserName.current.value = "Enter Your Name"
  }

  return (
    <section id="player">
      <h2> Welcome {PlayerName ?? "Enter Your Name"}</h2>
      <p>
        <input type="text" ref={UserName} />
        <button onClick={handleName}>Set Name</button>
      </p>

    </section>
  );
}






