import type { Meta, StoryObj } from '@storybook/vue3';
import Hero from './index.vue';

const meta: Meta<typeof Hero> = {
  title: 'SectionHero',
  component: Hero
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  render: args => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: '<Hero v-bind="args" />'
  }),
  args: {
    text: 'HERO TEXT sadlfkjasdlkfjasldkf'
  }
};
