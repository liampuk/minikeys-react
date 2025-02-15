import { KeyboardMode, KeyMap, MiniKeysKeyboard } from "minikeys2"
import { useEffect, useRef, useState } from "react"

export const useKeyboardControl = (
  mode: KeyboardMode,
  playNoteFromMidi?: (midiNote: number, velocity?: number) => void
) => {
  const minikeysKeyboardRef = useRef<MiniKeysKeyboard | null>(null)
  const [keyMap, setKeyMap] = useState<KeyMap>()
  const [activeKeys, setActiveKeys] = useState<string[]>([])

  useEffect(() => {
    if (!minikeysKeyboardRef.current) {
      minikeysKeyboardRef.current = new MiniKeysKeyboard(mode)
      setKeyMap(minikeysKeyboardRef.current.getNoteMap())
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      setActiveKeys((prev) => [...prev, event.key])
      const keyMap = minikeysKeyboardRef.current?.getNoteMap()
      const note = keyMap?.get(event.key)?.midiNote
      if (note && playNoteFromMidi) {
        console.log(note)
        playNoteFromMidi(note)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      setActiveKeys((prev) => prev.filter((code) => code !== event.key))
    }

    window.addEventListener("keydown", handleKeyDown, true)
    window.addEventListener("keyup", handleKeyUp, true)

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true)
      window.removeEventListener("keyup", handleKeyUp, true)
      minikeysKeyboardRef.current = null
    }
  }, [mode, playNoteFromMidi])

  const transposeDown = () => {
    minikeysKeyboardRef.current?.shiftLeft()
    setKeyMap(minikeysKeyboardRef.current?.getNoteMap())
  }

  const transposeUp = () => {
    minikeysKeyboardRef.current?.shiftRight()
    setKeyMap(minikeysKeyboardRef.current?.getNoteMap())
  }

  const octaveDown = () => {
    minikeysKeyboardRef.current?.shiftLeftOctave()
    setKeyMap(minikeysKeyboardRef.current?.getNoteMap())
  }

  const octaveUp = () => {
    minikeysKeyboardRef.current?.shiftRightOctave()
    setKeyMap(minikeysKeyboardRef.current?.getNoteMap())
  }

  return {
    activeKeys,
    keyMap,
    transposeDown,
    transposeUp,
    octaveDown,
    octaveUp,
  }
}
