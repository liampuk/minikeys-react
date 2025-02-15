import styled, { css } from "styled-components"

type Props = {
  label?: string
  modifier?: number
  hidden?: boolean
  baseWidth: number
}

export const Key = ({ label, modifier, hidden, baseWidth }: Props) => {
  return (
    <Container
      $hidden={hidden}
      $width={baseWidth * (modifier ?? 1)}
      $height={baseWidth}
    >
      {modifier ? (
        <DarkKeycap $modifier={modifier}>{label}</DarkKeycap>
      ) : (
        <Keycap>{label}</Keycap>
      )}
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
  opacity: ${(props) => (props.$hidden ? 0 : 1)};
  padding: calc(var(--height) * 0.06);
`

const Keycap = styled.div<{ $modifier?: number }>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.$modifier ? "#fff" : "#fff")};
  border-radius: calc(var(--height) * 0.05);
  font-family: sans-serif;
  padding: 8px;
  font-size: 12px;
  color: #444;
  /* box-shadow: 0px calc(var(--height) * 0.01) 0 calc(var(--height) * 0.03)
    rgba(0, 0, 0, 0.2); */

  box-shadow: 0px calc(var(--height) * 0.01) 0 calc(var(--height) * 0.02)
      rgba(0, 0, 0, 0.01),
    0px calc(var(--height) * 0.01) 2px calc(var(--height) * 0.02)
      rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0.8) 0px 2px 3px 0px inset;

  background-image: radial-gradient(
    200% 100% at 50% 10%,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  cursor: pointer;
  user-select: none;

  transition: all 0.2s ease-in-out;

  ${({ $modifier }) =>
    !$modifier &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    `}

  &:hover {
    background-color: #f8f8f8;
  }

  &:active {
    transform: translateY(calc(var(--height) * 0.02));
    box-shadow: 0px calc(var(--height) * -0.01) 0 calc(var(--height) * 0.02)
        rgba(0, 0, 0, 0.1),
      0px calc(var(--height) * -0.01) 2px calc(var(--height) * 0.02)
        rgba(0, 0, 0, 0.1),
      rgba(255, 255, 255, 0.8) 0px 2px 3px 0px inset;
  }
`

const DarkKeycap = styled(Keycap)`
  background-color: #333;
  color: #fff;

  box-shadow: 0px calc(var(--height) * 0.01) 0 calc(var(--height) * 0.02)
      rgba(0, 0, 0, 0.9),
    0px calc(var(--height) * 0.01) 2px calc(var(--height) * 0.02)
      rgba(0, 0, 0, 0.3),
    rgba(255, 255, 255, 0.2) 0px calc(var(--height) * 0.01)
      calc(var(--height) * 0.01) calc(var(--height) * 0.01) inset;

  background-image: radial-gradient(
    200% 100% at 50% 10%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  &:hover {
    background-color: #222;
  }

  &:active {
    transform: translateY(calc(var(--height) * 0.02));
    box-shadow: 0px calc(var(--height) * -0.01) 0 calc(var(--height) * 0.02)
        rgba(0, 0, 0, 0.9),
      0px calc(var(--height) * -0.01) 2px calc(var(--height) * 0.02)
        rgba(0, 0, 0, 0.3),
      rgba(255, 255, 255, 0.2) 0px calc(var(--height) * 0.01)
        calc(var(--height) * 0.01) calc(var(--height) * 0.01) inset;
  }
`
