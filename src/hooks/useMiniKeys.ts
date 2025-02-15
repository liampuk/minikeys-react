import { MiniKeys, Sample } from "minikeys2"
import { useEffect, useRef, useState } from "react"

export const useMiniKeys = (samples: Sample[]) => {
  const minikeysRef = useRef<MiniKeys | null>(null)
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!minikeysRef.current) {
      minikeysRef.current = new MiniKeys()
    }

    return () => {
      minikeysRef.current = null
    }
  }, [])

  useEffect(() => {
    if (minikeysRef.current) {
      setIsLoading(true)
      minikeysRef.current
        .loadNotes(samples, setProgress)
        .then(() => {
          setIsLoading(false)
          setIsSuccess(true)
        })
        .catch(() => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [samples])

  return {
    playNoteFromName: minikeysRef.current
      ? minikeysRef.current.playNoteFromName
      : undefined,
    playNoteFromMidi: minikeysRef.current
      ? minikeysRef.current.playNoteFromMidi
      : undefined,
    isLoading,
    isSuccess,
    isError,
    progress,
  }
}
