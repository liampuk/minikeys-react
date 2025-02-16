import { KeyMap } from "minikeys2"
import styled from "styled-components"
import { Key } from "./Key"
import { keyboardRows, keyCodeToLabel } from "./utils"

type Props = {
  width?: number
  mode?: "single" | "dual"
  showFullKeyboard?: boolean
  modifierKeys?: ModifierKey[]
  activeKeys: string[]
  keyMap: KeyMap
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
  mode = "single",
  showFullKeyboard = false,
  modifierKeys,
  activeKeys,
  keyMap,
  onKeyClick,
}: Props) => {
  const hideModifiers = !showFullKeyboard

  const baseWidth = width / (showFullKeyboard ? 15 : 12.5)

  const calculateRowShift = (shift: number) => {
    if (showFullKeyboard) {
      return 0
    } else {
      if (mode === "single") {
        return baseWidth * shift - baseWidth * 0.5
      } else {
        return baseWidth * shift
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
      <Row $shift={0} $show={mode === "dual" || showFullKeyboard}>
        <Key
          baseWidth={baseWidth}
          size={1}
          hidden={hideModifiers}
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
              mode === "single"
                ? optionalModifier([keyboardRows[0][i]])
                : undefined
            }
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2}
          hidden={hideModifiers}
          label="backspace"
          active={activeKeys.includes("Backspace")}
          modifier={optionalModifier(["Backspace"])}
        />
      </Row>
      <Row $shift={calculateRowShift(0.5)} $show={true}>
        <Key
          baseWidth={baseWidth}
          size={1.5}
          hidden={hideModifiers}
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
          hidden={hideModifiers}
          label="\"
          active={activeKeys.includes("Backquote")}
          modifier={optionalModifier(["Backquote"])}
        />
      </Row>
      <Row $shift={calculateRowShift(0.75)} $show={true}>
        <Key
          baseWidth={baseWidth}
          size={1.75}
          hidden={hideModifiers}
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
          hidden={hideModifiers}
          label="enter"
          active={activeKeys.includes("Enter")}
          modifier={optionalModifier(["Enter"])}
        />
      </Row>
      <Row
        $shift={calculateRowShift(1.25)}
        $show={mode === "dual" || showFullKeyboard}
      >
        <Key
          baseWidth={baseWidth}
          size={2.25}
          hidden={hideModifiers}
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
              mode === "single"
                ? optionalModifier([keyboardRows[3][i]])
                : undefined
            }
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2.75}
          hidden={hideModifiers}
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
