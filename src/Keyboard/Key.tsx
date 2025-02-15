import styled, { css } from "styled-components"

type Props = {
  label?: string
  size?: number
  hidden?: boolean
  baseWidth: number
  active?: boolean
  disabled?: boolean
  keyType: "black" | "white" | "disabled" | "unplayable"
}

export const Key = ({
  label,
  size,
  hidden,
  baseWidth,
  active,
  keyType,
}: Props) => {
  return (
    <Container
      $hidden={hidden}
      $width={baseWidth * (size ?? 1)}
      $height={baseWidth}
    >
      <Keycap $size={size} $active={active || false} $keyType={keyType}>
        {label}
      </Keycap>
    </Container>
  )
}

const Container = styled.div<{
  $hidden?: boolean
  $width: number
  $height: number
}>`
  --width: ${(props) => props.$width}px;
  --height: ${(props) => props.$height}px;
  width: var(--width);
  height: var(--height);
  /* opacity: ${(props) => (props.$hidden ? 0 : 1)}; */
  display: ${(props) => (props.$hidden ? "none" : "block")};
  padding: calc(var(--height) * 0.07);
`

const disabledKeycap = css`
  opacity: 0.2;
  background-color: #eee;
`

const unplayableKeycap = css`
  opacity: 0.2;
  background-color: #eee;
`

const blackKeycap = css`
  background-color: #222;
  color: #fff;

  &:hover {
    background-color: #111;
  }
`

const whiteKeycap = css`
  background-color: #fff;
  color: #444;

  &:hover {
    background-color: #f8f8f8;
  }
`

const activeKeycap = css`
  transform: translateY(calc(var(--height) * 0.03));
  box-shadow: 0 calc(var(--height) * 0.01) calc(var(--height) * 0.03)
      calc(var(--height) * 0.01) rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.2) 0px calc(var(--height) * 0.03)
      calc(var(--height) * 0.04) 0px inset;
`

const activeKeycapWhite = css`
  ${activeKeycap}
  background-color: #efefef;
`

const activeKeycapBlack = css`
  ${activeKeycap}
  background-color: #000;
`

const playableKeycap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--height) * 0.2);
`

const Keycap = styled.div<{
  $size?: number
  $active: boolean
  $keyType: "black" | "white" | "disabled" | "unplayable"
}>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--height) * 0.06);
  font-family: sans-serif;
  padding: calc(var(--height) * 0.08);
  font-size: calc(var(--height) * 0.12);
  cursor: pointer;
  user-select: none;
  box-shadow: 0 calc(var(--height) * 0.01) calc(var(--height) * 0.03)
      calc(var(--height) * 0.01) rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0.1) 0px calc(var(--height) * 0.03)
      calc(var(--height) * 0.04) 0px inset;
  transition: all 0.3s ease;

  ${({ $keyType }) => {
    if ($keyType === "unplayable") {
      return unplayableKeycap
    } else if ($keyType === "disabled") {
      return disabledKeycap
    } else if ($keyType === "black") {
      return blackKeycap
    } else if ($keyType === "white") {
      return whiteKeycap
    }
  }}

  /* ${({ $keyType }) => {
    if ($keyType !== "disabled" && $keyType !== "unplayable") {
      return $keyType === "black" ? activeKeycapBlack : activeKeycapWhite
    }
  }} */

  /* TODO remove once added to active keyas on click */
  &:active {
    ${({ $keyType }) => {
      if ($keyType !== "disabled" && $keyType !== "unplayable") {
        return $keyType === "black" ? activeKeycapBlack : activeKeycapWhite
      }
    }}
  }

  ${({ $active, $keyType }) => {
    if ($keyType !== "disabled" && $keyType !== "unplayable" && $active) {
      return $keyType === "black" ? activeKeycapBlack : activeKeycapWhite
    }
  }}

  ${({ $size }) => {
    if (!$size) {
      return playableKeycap
    }
  }}
`
