import { useState } from "react"
import { samples } from "../data"
import { useMiniKeys } from "../hooks/useMiniKeys"

export const Button = () => {
  const [noteValue, setNoteValue] = useState("")
  const [velocity, setVelocityValue] = useState("127")

  const { playNoteFromName } = useMiniKeys(samples)

  const test = () => {
    playNoteFromName && playNoteFromName(noteValue as any, parseInt(velocity))
  }

  return (
    <div>
      <p>note</p>
      <input
        type="text"
        value={noteValue}
        onChange={(e) => setNoteValue(e.target.value)}
      />
      <p>velocity</p>
      <input
        type="text"
        value={velocity}
        onChange={(e) => setVelocityValue(e.target.value)}
      />
      <button onClick={() => test()}>minikeys</button>
    </div>
  )
}
