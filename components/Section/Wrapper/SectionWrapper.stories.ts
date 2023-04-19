import type { Meta, StoryObj } from '@storybook/vue3';
import Wrapper from './index.vue';

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
    sectionId: 'Hero',
    component: 'SectionHero',
    Title: 'Test Hero',
    text: 'Lorem ipsum lolol',
    img: '',
    dark: false
  }
};
export const Dark: Story = {
  render: args => ({
    components: { Wrapper },
    setup() {
      return { args };
    },
    template: '<Wrapper v-bind="args" />'
  }),
  args: {
    sectionId: 'Hero',
    component: 'SectionHero',
    Title: 'Test Hero',
    text: 'Lorem ipsum lolol',
    img: '',
    dark: true
  }
};
