import styled from "styled-components"
import { samples } from "../data"
import { useKeyboardControl } from "../hooks/useKeyboardControl"
import { useMiniKeys } from "../hooks/useMiniKeys"
import { Key } from "./Key"

export const Keyboard = () => {
  const width = 1200
  const mode = "single"
  const showFullKeyboard = false
  const hideModifiers = !showFullKeyboard
  const rows = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  ]
  const baseWidth = width / (showFullKeyboard ? 15 : 12.5)

  const { playNoteFromMidi } = useMiniKeys(samples)

  const {
    activeKeys,
    keyMap,
    transposeDown,
    transposeUp,
    octaveDown,
    octaveUp,
  } = useKeyboardControl(mode, playNoteFromMidi)

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

  return (
    <Container $width={width}>
      <Row $shift={0} $show={mode === "dual" || showFullKeyboard}>
        <Key
          baseWidth={baseWidth}
          size={1}
          hidden={hideModifiers}
          label="``"
          active={activeKeys.includes("Escape")}
          keyType="unplayable"
        ></Key>
        {Array.from({ length: 12 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={rows[0][i]}
            keyType={keyMap?.get(rows[0][i])?.type || "unplayable"}
            active={activeKeys.includes(rows[0][i])}
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2}
          hidden={hideModifiers}
          label="backspace"
          keyType="unplayable"
        />
      </Row>
      <Row $shift={calculateRowShift(0.5)} $show={true}>
        <Key
          baseWidth={baseWidth}
          size={1.5}
          hidden={hideModifiers}
          label="tab"
          keyType="unplayable"
        />
        {Array.from({ length: 12 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={rows[1][i]}
            keyType={keyMap?.get(rows[1][i])?.type || "unplayable"}
            active={activeKeys.includes(rows[1][i])}
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={1.5}
          hidden={hideModifiers}
          label="\"
          keyType="unplayable"
        />
      </Row>
      <Row $shift={calculateRowShift(0.75)} $show={true}>
        <Key
          baseWidth={baseWidth}
          size={1.75}
          hidden={hideModifiers}
          label="caps lock"
          keyType="unplayable"
        />
        {Array.from({ length: 11 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={rows[2][i]}
            keyType={keyMap?.get(rows[2][i])?.type || "unplayable"}
            active={activeKeys.includes(rows[2][i])}
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2.25}
          hidden={hideModifiers}
          label="enter"
          keyType="unplayable"
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
          keyType="unplayable"
        />
        {Array.from({ length: 10 }).map((_, i) => (
          <Key
            baseWidth={baseWidth}
            key={i}
            label={rows[3][i]}
            keyType={keyMap?.get(rows[3][i])?.type || "unplayable"}
            active={activeKeys.includes(rows[3][i])}
            a
          />
        ))}
        <Key
          baseWidth={baseWidth}
          size={2.75}
          hidden={hideModifiers}
          label="shift"
          keyType="unplayable"
        />
      </Row>
      <button onClick={() => transposeDown && transposeDown()}>left</button>
      <button onClick={() => transposeUp && transposeUp()}>right</button>
      <button onClick={() => octaveDown && octaveDown()}>left</button>
      <button onClick={() => octaveUp && octaveUp()}>right</button>
    </Container>
  )
}

const Container = styled.div<{ $width: number }>`
  width: ${(props) => props.$width}px;
  box-sizing: border-box;
  /* background-color: #222; */

  * {
    box-sizing: border-box;
  }
`

const Row = styled.div<{ $shift: number; $show: boolean }>`
  display: ${(props) => (props.$show ? "flex" : "none")};
  margin-left: ${(props) => props.$shift}px;
`
