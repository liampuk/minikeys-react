import { useState } from "react"
import styled from "styled-components"
import { Key } from "./Key"

export const Keyboard = () => {
  const width = 1200
  const [hideModifiers, _setHideModifiers] = useState(false)
  const rows = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "@"],
    ["z", "x", "c", "v", "b", "n", "m", ",", "<", ">"],
  ]
  const baseWidth = width / 15

  return (
    <Container $width={width}>
      <Row>
        <Key
          baseWidth={baseWidth}
          modifier={1}
          hidden={hideModifiers}
          label="esc"
        ></Key>
        {Array.from({ length: 12 }).map((_, i) => (
          <Key baseWidth={baseWidth} key={i} label={rows[0][i]} />
        ))}
        <Key
          baseWidth={baseWidth}
          modifier={2}
          hidden={hideModifiers}
          label="backspace"
        />
      </Row>
      <Row>
        <Key
          baseWidth={baseWidth}
          modifier={1.5}
          hidden={hideModifiers}
          label="tab"
        />
        {Array.from({ length: 12 }).map((_, i) => (
          <Key baseWidth={baseWidth} key={i} label={rows[1][i]} />
        ))}
        <Key
          baseWidth={baseWidth}
          modifier={1.5}
          hidden={hideModifiers}
          label="\"
        />
      </Row>
      <Row>
        <Key
          baseWidth={baseWidth}
          modifier={1.75}
          hidden={hideModifiers}
          label="caps lock"
        />
        {Array.from({ length: 11 }).map((_, i) => (
          <Key baseWidth={baseWidth} key={i} label={rows[2][i]} />
        ))}
        <Key
          baseWidth={baseWidth}
          modifier={2.25}
          hidden={hideModifiers}
          label="enter"
        />
      </Row>
      <Row>
        <Key
          baseWidth={baseWidth}
          modifier={2.25}
          hidden={hideModifiers}
          label="shift"
        />
        {Array.from({ length: 10 }).map((_, i) => (
          <Key baseWidth={baseWidth} key={i} label={rows[3][i]} />
        ))}
        <Key
          baseWidth={baseWidth}
          modifier={2.75}
          hidden={hideModifiers}
          label="shift"
        />
      </Row>
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

const Row = styled.div`
  display: flex;
`
