import type { Preview } from "@storybook/svelte";
import './storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Forms', 'Controls', 'Users', 'Themes'],
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
