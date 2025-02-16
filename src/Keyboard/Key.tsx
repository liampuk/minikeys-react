import styled, { css } from "styled-components"
import { ModifierKey } from "./Keyboard"

type Props = {
  label?: string
  size?: number
  hidden?: boolean
  hiddenOpacity?: boolean
  baseWidth: number
  active?: boolean
  disabled?: boolean
  keyType?: "black" | "white" | "disabled" | "modifier"
  modifier?: ModifierKey
  onClick?: () => void
}

export const Key = ({
  label,
  size,
  hidden,
  hiddenOpacity,
  baseWidth,
  active,
  keyType,
  modifier,
  onClick,
}: Props) => {
  return (
    <Container
      $hidden={hidden}
      $hiddenOpacity={hiddenOpacity}
      $width={baseWidth * (size ?? 1)}
      $height={baseWidth}
    >
      <Keycap
        $size={size}
        $active={active || false}
        $keyType={modifier ? "modifier" : keyType}
        onMouseDown={modifier ? modifier.action : onClick}
        $bgColour={modifier?.bgColour}
        $colour={modifier?.colour}
      >
        {label}
        {}
        {modifier && <Label $size={size}>{modifier.label}</Label>}
      </Keycap>
    </Container>
  )
}

const Container = styled.div<{
  $hidden?: boolean
  $hiddenOpacity?: boolean
  $width: number
  $height: number
}>`
  --width: ${(props) => props.$width}px;
  --height: ${(props) => props.$height}px;
  width: var(--width);
  height: var(--height);
  opacity: ${(props) => (props.$hiddenOpacity ? 0 : 1)};
  display: ${(props) => (props.$hidden ? "none" : "block")};
  padding: calc(var(--height) * 0.07);
`

const disabledKeycap = css`
  opacity: 0.3;
  background-color: #eee;
`

const unplayableKeycap = css`
  opacity: 0.3;
  background-color: #eee;
`

const activeKeycap = css`
  transform: translateY(calc(var(--height) * 0.03));
  box-shadow: 0 calc(var(--height) * 0.01) calc(var(--height) * 0.03)
      calc(var(--height) * 0.01) rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.2) 0px calc(var(--height) * 0.03)
      calc(var(--height) * 0.04) 0px inset;
`

const blackKeycap = css`
  background-color: #222;
  color: #fff;

  &:hover {
    background-color: #111;
  }

  &:active {
    ${activeKeycap}
    background-color: #000;
  }
`

const whiteKeycap = css`
  background-color: #fff;
  color: #444;
  border: 1px solid #ddd;

  &:hover {
    background-color: #f8f8f8;
  }

  &:active {
    ${activeKeycap}
    background-color: #efefef;
  }
`

const activeKeycapWhite = css`
  ${activeKeycap}
  background-color: #efefef;
`

const activeKeycapBlack = css`
  ${activeKeycap}
  background-color: #000;
`

const activeKeycapModifier = css`
  ${activeKeycap}
  filter: brightness(0.9);
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
  $keyType?: "black" | "white" | "disabled" | "unplayable" | "modifier"
  $bgColour?: string
  $colour?: string
}>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--height) * 0.06);
  font-family: sans-serif;
  padding: calc(var(--height) * 0.08);
  font-size: calc(var(--height) * 0.15);
  cursor: pointer;
  user-select: none;
  box-shadow: 0 calc(var(--height) * 0.01) calc(var(--height) * 0.03)
      calc(var(--height) * 0.01) rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0.1) 0px calc(var(--height) * 0.03)
      calc(var(--height) * 0.04) 0px inset;
  transition: all 0.3s ease;

  ${({ $keyType, $bgColour, $colour }) => {
    if ($keyType === undefined) {
      return unplayableKeycap
    } else if ($keyType === "disabled") {
      return disabledKeycap
    } else if ($keyType === "black") {
      return blackKeycap
    } else if ($keyType === "white") {
      return whiteKeycap
    } else if ($keyType === "modifier") {
      return css`
        background-color: ${$bgColour || "#eee"};
        color: ${$colour};
        ${!$bgColour && "border: 1px solid #ddd;"}

        &:hover {
          filter: brightness(0.9);
        }

        &:active {
          ${activeKeycapModifier}
        }
      `
    }
  }}

  ${({ $active, $keyType }) => {
    if ($keyType !== "disabled" && $keyType !== "unplayable" && $active) {
      if ($keyType === "white") return activeKeycapWhite
      if ($keyType === "black") return activeKeycapBlack
      if ($keyType === "modifier") return activeKeycapModifier
    }
  }}

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ $size, $keyType }) => {
    if (!$size && $keyType !== "modifier") {
      return playableKeycap
    }
  }}
`

const Label = styled.span<{ $size: number }>`
  font-size: calc(var(--height) * 0.15);
  ${({ $size }) =>
    !$size &&
    css`
      text-align: center;
    `}
`
