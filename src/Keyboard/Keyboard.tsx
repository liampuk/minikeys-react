import { KeyMap } from "minikeys2"
import styled from "styled-components"
import { Key } from "./Key"
import { keyboardRows, keyCodeToLabel } from "./utils"

export type KeyboardProps = {
  width?: number
  dualMode?: boolean
  showFullKeyboard?: boolean
  modifierKeys?: ModifierKey[]
  activeKeys: string[]
  keyMap: KeyMap | undefined
  onKeyClick?: (midiNote: number) => void
}

export type ModifierKey = {
  keyCode: string
  label: string
  action: () => void
  bgColour?: string
  colour?: string
}

export const Keyboard = ({
  width = 1200,
  dualMode = false,
  showFullKeyboard = false,
  modifierKeys,
  activeKeys,
  keyMap,
  onKeyClick,
}: KeyboardProps) => {
  const hideModifiers = !showFullKeyboard
  const nonPlayableModifierKey = modifierKeys?.some(
    (modifierKey) =>
      !Array.from(keyCodeToLabel.keys()).includes(modifierKey.keyCode)
  )

  const baseWidth =
    width / (showFullKeyboard || nonPlayableModifierKey ? 15 : 12.5)

  const calculateRowShift = (shift: number) => {
    if (showFullKeyboard) {
      return 0
    } else {
      if (dualMode || nonPlayableModifierKey) {
        return baseWidth * shift
      } else {
        return baseWidth * shift - baseWidth * 0.5
      }
    }
  }

  const handleClick = (midiNote: number | null | undefined) => {
    if (onKeyClick && midiNote !== null && midiNote !== undefined) {
      onKeyClick(midiNote)
    }
  }

  const optionalModifier = (keyCodes: string[]) => {
    return modifierKeys?.find((modifierKey) =>
      keyCodes.includes(modifierKey.keyCode)
    )
  }

  return (
    <Container $width={width}>
      <Row
        $shift={
          nonPlayableModifierKey
            ? modifierKeys?.some((modifierKey) =>
                ["Escape", "IntlBackslash"].includes(modifierKey.keyCode)
              )
              ? 0
              : calculateRowShift(1)
            : 0
        }
        $show={
          dualMode ||
          showFullKeyboard ||
          !!optionalModifier(["Escape", "IntlBackslash", "Backspace"])
        }
      >
        <Key
          baseWidth={baseWidth}
          size={1}
          hidden={
            hideModifiers && !optionalModifier(["Escape", "IntlBackslash"])
          }
          label="esc"
          active={
            activeKeys.includes("Escape") ||
            activeKeys.includes("IntlBackslash")
          }
          modifier={optionalModifier(["Escape", "IntlBackslash"])}
        ></Key>
        {Array.from({ length: 12 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={keyCodeToLabel.get(keyboardRows[0][i])}
            keyType={keyMap?.get(keyboardRows[0][i])?.type}
            active={activeKeys.includes(keyboardRows[0][i])}
            onClick={() =>
              handleClick(keyMap?.get(keyboardRows[0][i])?.midiNote)
            }
            modifier={
              dualMode ? undefined : optionalModifier([keyboardRows[0][i]])
            }
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2}
          hidden={hideModifiers && !optionalModifier(["Backspace"])}
          label="backspace"
          active={activeKeys.includes("Backspace")}
          modifier={optionalModifier(["Backspace"])}
        />
      </Row>
      <Row
        $shift={
          nonPlayableModifierKey
            ? modifierKeys?.some((modifierKey) =>
                ["Tab"].includes(modifierKey.keyCode)
              )
              ? 0
              : calculateRowShift(1.5)
            : calculateRowShift(0.5)
        }
        $show={true}
      >
        <Key
          baseWidth={baseWidth}
          size={1.5}
          hidden={hideModifiers && !optionalModifier(["Tab"])}
          label="tab"
          active={activeKeys.includes("Tab")}
          modifier={optionalModifier(["Tab"])}
        />
        {Array.from({ length: 12 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={keyCodeToLabel.get(keyboardRows[1][i])}
            keyType={keyMap?.get(keyboardRows[1][i])?.type}
            active={activeKeys.includes(keyboardRows[1][i])}
            onClick={() =>
              handleClick(keyMap?.get(keyboardRows[1][i])?.midiNote)
            }
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={1.5}
          hidden={hideModifiers && !optionalModifier(["Backquote"])}
          label="\"
          active={activeKeys.includes("Backquote")}
          modifier={optionalModifier(["Backquote"])}
        />
      </Row>
      <Row
        $shift={
          nonPlayableModifierKey
            ? modifierKeys?.some((modifierKey) =>
                ["CapsLock"].includes(modifierKey.keyCode)
              )
              ? 0
              : calculateRowShift(1.75)
            : calculateRowShift(0.75)
        }
        $show={true}
      >
        <Key
          baseWidth={baseWidth}
          size={1.75}
          hidden={hideModifiers && !optionalModifier(["CapsLock"])}
          label="caps lock"
          active={activeKeys.includes("CapsLock")}
          modifier={optionalModifier(["CapsLock"])}
        />
        {Array.from({ length: 11 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={keyCodeToLabel.get(keyboardRows[2][i])}
            keyType={keyMap?.get(keyboardRows[2][i])?.type}
            active={activeKeys.includes(keyboardRows[2][i])}
            onClick={() =>
              handleClick(keyMap?.get(keyboardRows[2][i])?.midiNote)
            }
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2.25}
          hidden={hideModifiers && !optionalModifier(["Enter"])}
          label="enter"
          active={activeKeys.includes("Enter")}
          modifier={optionalModifier(["Enter"])}
        />
      </Row>
      <Row
        $shift={
          nonPlayableModifierKey
            ? modifierKeys?.some(
                (modifierKey) => modifierKey.keyCode === "ShiftLeft"
              )
              ? 0
              : calculateRowShift(2.25)
            : calculateRowShift(1.25)
        }
        $show={
          dualMode ||
          showFullKeyboard ||
          !!optionalModifier(["ShiftLeft", "ShiftRight"])
        }
      >
        <Key
          baseWidth={baseWidth}
          size={2.25}
          hidden={hideModifiers && !optionalModifier(["ShiftLeft"])}
          label="shift"
          active={activeKeys.includes("ShiftLeft")}
          modifier={optionalModifier(["ShiftLeft"])}
        />
        {Array.from({ length: 10 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={keyCodeToLabel.get(keyboardRows[3][i])}
            keyType={keyMap?.get(keyboardRows[3][i])?.type}
            active={activeKeys.includes(keyboardRows[3][i])}
            onClick={() =>
              handleClick(keyMap?.get(keyboardRows[3][i])?.midiNote)
            }
            modifier={
              dualMode ? undefined : optionalModifier([keyboardRows[3][i]])
            }
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2.75}
          hidden={hideModifiers && !optionalModifier(["ShiftRight"])}
          label="shift"
          active={activeKeys.includes("ShiftRight")}
          modifier={optionalModifier(["ShiftRight"])}
        />
      </Row>
    </Container>
  )
}

const Container = styled.div<{ $width: number }>`
  width: ${(props) => props.$width}px;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`

const Row = styled.div<{ $shift: number; $show: boolean }>`
  display: ${(props) => (props.$show ? "flex" : "none")};
  margin-left: ${(props) => props.$shift}px;
`
