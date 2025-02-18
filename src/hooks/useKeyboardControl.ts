import { KeyMap } from "minikeys2"
import { useEffect, useState } from "react"
import { ModifierKey } from "../Keyboard/Keyboard"

export const useKeyboardControl = (
  keyMap: KeyMap | undefined,
  playNoteFromMidi?: (midiNote: number, velocity?: number) => void,
  modifierKeys?: ModifierKey[]
) => {
  const [activeKeys, setActiveKeys] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setActiveKeys((prev) => [...prev, event.code])
      const modifierKey = modifierKeys?.find(
        (modifierKey) => modifierKey.keyCode === event.code
      )
      if (modifierKey && !keyMap?.get(event.code)) {
        modifierKey?.action()
      }
      const note = keyMap?.get(event.code)?.midiNote
      if (note && playNoteFromMidi) {
        playNoteFromMidi(note)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      setActiveKeys((prev) => prev.filter((code) => code !== event.code))
      const modifierKey = modifierKeys?.find(
        (modifierKey) => modifierKey.keyCode === event.code
      )
      if (modifierKey && !keyMap?.get(event.code)) {
        modifierKey?.actionOnRelease && modifierKey?.actionOnRelease()
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    window.addEventListener("keyup", handleKeyUp, true)

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true)
      window.removeEventListener("keyup", handleKeyUp, true)
    }
  }, [keyMap, playNoteFromMidi, modifierKeys])

  return {
    activeKeys,
  }
}
