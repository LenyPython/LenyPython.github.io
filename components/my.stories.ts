import { Meta, StoryObj } from '@storybook/vue3';
import My from './My.vue'; // Imported with '~' shorthand syntax

const meta: Meta<typeof My> = {
  component: My,
  render: args => ({
    components: { My }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
     <My />
   `
  })
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {};
