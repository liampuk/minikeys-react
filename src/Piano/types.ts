import { keyboardWhiteNotes, NoteName } from "minikeys2"

export type WhiteNote = (typeof keyboardWhiteNotes)[number]

export type Highlights = {
  rangeStart?: WhiteNote
  rangeEnd?: WhiteNote
  rangeColor?: string
  activeNotes?: NoteName[]
}
