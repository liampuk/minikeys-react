import { StoryObj } from "@storybook/react/*"
import { samples } from "../../data"
import { useKeyboardControl } from "../../hooks/useKeyboardControl"
import { useMiniKeys } from "../../hooks/useMiniKeys"
import { useMiniKeysKeyboard } from "../../hooks/useMiniKeysKeyboard"
import { Keyboard, KeyboardProps, ModifierKey } from "../Keyboard"

type Story = StoryObj<typeof Keyboard>

const defaultArgs: Partial<KeyboardProps> = {
  width: 1200,
  dualMode: false,
  showFullKeyboard: false,
}

const InteractiveKeyboard = (props: KeyboardProps) => {
  const { playNoteFromMidi } = useMiniKeys(samples)
  const { keyMap, transposeDown, transposeUp, octaveDown, octaveUp } =
    useMiniKeysKeyboard(props?.dualMode ? "dual" : "single")

  const modifierKeys: ModifierKey[] = [
    {
      keyCode: "KeyZ",
      label: "octave down",
      action: () => octaveDown(),
    },
    {
      keyCode: "KeyX",
      label: "octave up",
      action: () => octaveUp(),
    },
    {
      keyCode: "KeyC",
      label: "shift down",
      action: () => transposeDown(),
    },
    {
      keyCode: "KeyV",
      label: "shift up",
      action: () => transposeUp(),
    },
  ]

  const { activeKeys } = useKeyboardControl(
    keyMap,
    playNoteFromMidi,
    modifierKeys
  )

  return (
    <Keyboard
      {...props}
      activeKeys={activeKeys}
      keyMap={keyMap}
      onKeyClick={playNoteFromMidi}
      modifierKeys={modifierKeys}
    />
  )
}

export const PrimaryStory: Story = {
  args: defaultArgs,
  argTypes: {
    onKeyClick: { control: { disable: true } },
    keyMap: { control: { disable: true } },
    activeKeys: { control: { disable: true } },
    modifierKeys: { control: { disable: true } },
  },
  render: InteractiveKeyboard,
}

export default {
  title: "Keyboard",
  component: Keyboard,
}
