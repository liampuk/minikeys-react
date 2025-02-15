import { useEffect } from "@storybook/preview-api"
import type { Preview } from "@storybook/react"

const preview: Preview = {
  decorators: [
    (Story) => {
      useEffect(() => {
        const handler = (event: KeyboardEvent) => event.stopPropagation()
        window.addEventListener("keydown", handler, true)
        return () => {
          window.removeEventListener("keydown", handler, true)
        }
      }, [])

      return <Story />
    },
  ],
}

export default preview
