import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    backgrounds: {
      default: 'dark-blue',
      values: [
        {
          name: 'dark-blue',
          value: '#212435',
        },
      ],
    },
    storySort: {
      method: 'alphabetical',
    },
  },
};

export default preview;
