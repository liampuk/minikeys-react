import { StoryObj } from "@storybook/react/*"
import { samples } from "../../data"
import { useKeyboardControl } from "../../hooks/useKeyboardControl"
import { useMiniKeys } from "../../hooks/useMiniKeys"
import { useMiniKeysKeyboard } from "../../hooks/useMiniKeysKeyboard"
import { Keyboard, ModifierKey } from "../Keyboard"

type Story = StoryObj<typeof Keyboard>

export default {
  title: "Keyboard",
  component: Keyboard,
}

export const Primary: Story = {
  args: {
    width: 1200,
    mode: "single",
    showFullKeyboard: false,
  },
  decorators: [
    (Story) => {
      const { playNoteFromMidi } = useMiniKeys(samples)
      const { keyMap, transposeDown, transposeUp, octaveDown, octaveUp } =
        useMiniKeysKeyboard("single")

      const modifierKeys: ModifierKey[] = [
        // {
        //   keyCode: "ShiftLeft",
        //   label: "octave down",
        //   action: () => octaveDown(),
        // },
        // {
        //   keyCode: "ShiftRight",
        //   label: "octave up",
        //   action: () => octaveUp(),
        // },
        {
          keyCode: "ShiftLeft",
          label: "shift down",
          action: () => transposeDown(),
        },
        {
          keyCode: "ShiftRight",
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
        <Story
          args={{
            activeKeys,
            keyMap,
            onKeyClick: playNoteFromMidi,
            modifierKeys,
            mode: "single",
            showFullKeyboard: true,
            width: 1200,
          }}
        />
      )
    },
  ],
}
