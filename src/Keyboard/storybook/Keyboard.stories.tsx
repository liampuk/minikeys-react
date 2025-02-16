import { StoryObj } from "@storybook/react/*"
import { Keyboard } from "../Keyboard"

export default {
  title: "Keyboard",
  component: Keyboard,
}

type Story = StoryObj<typeof Keyboard>

export const Primary: Story = {
  args: {
    width: 1200,
    mode: "single",
    showFullKeyboard: false,
    modifierKeys: [
      {
        keyCode: "ShiftLeft",
        label: "test",
        action: () => console.log("test modifier action"),
      },
      {
        keyCode: "ShiftRight",
        label: "test",
        action: () => console.log("test modifier action"),
      },
    ],
  },
}
