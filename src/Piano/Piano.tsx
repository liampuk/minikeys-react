import { keyboardWhiteNotes } from "minikeys2"
import { BlackNotes } from "./BlackNotes"
import { WhiteNotes } from "./WhiteNotes"
import { Highlights } from "./types"

type WhiteNote = (typeof keyboardWhiteNotes)[number]

export type PianoProps = {
  width: number
  height?: number
  numKeys: number
  strokeColour?: string
  strokeWidth?: number
  baseNote?: WhiteNote
  showLabels?: boolean
  highlights?: Highlights
  onClick?: (midiNote: number) => void
}

export const Piano = ({
  width,
  numKeys = 15,
  height,
  strokeWidth = 1.5,
  strokeColour,
  baseNote = "C4",
  showLabels = false,
  highlights,
  onClick,
}: PianoProps) => {
  const keyHeight = height ?? Math.min((width / numKeys) * 5, width / 4)
  const maxNumKeys = Math.min(numKeys, 52)

  const baseNoteOffset = Math.min(
    keyboardWhiteNotes.indexOf(baseNote),
    52 - numKeys
  )

  const handleClick = (midiNote: number | null | undefined) => {
    if (onClick && midiNote !== null && midiNote !== undefined) {
      onClick(midiNote)
    }
  }

  return (
    <div>
      <svg
        viewBox={`0 0 ${width} ${keyHeight}`}
        width={width}
        height={keyHeight}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <WhiteNotes
            numKeys={maxNumKeys}
            width={width}
            height={keyHeight}
            strokeWidth={strokeWidth}
            strokeColour={strokeColour}
            baseNoteOffset={baseNoteOffset}
            showLabels={showLabels}
            highlights={highlights}
            handleClick={handleClick}
          />
        </g>
        <g>
          <BlackNotes
            numKeys={maxNumKeys}
            width={width}
            height={keyHeight}
            strokeWidth={strokeWidth}
            baseNoteOffset={baseNoteOffset}
            showLabels={showLabels}
            highlights={highlights}
            handleClick={handleClick}
          />
        </g>
      </svg>
    </div>
  )
}
