import type { Meta, StoryObj } from '@storybook/vue3';
import Wrapper from './Wrapper.vue';

const meta: Meta<typeof Wrapper> = {
  title: 'SectionWrapper',
  component: Wrapper
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Primary: Story = {
  render: args => ({
    components: { Wrapper },
    setup() {
      return { args };
    },
    template: '<Wrapper v-bind="args" />'
  }),
  args: {
    sectionId: 'Primary',
    Title: 'Primary Label',
    dark: false
  }
};
