import path from 'path';
import { loadConfigFromFile, mergeConfig } from 'vite';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../pages/**/*.mdx',
    '../pages/**/*.stories.@(js|jsx|ts|tsx)',
    '../layouts/**/*.mdx',
    '../layouts/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(baseConfig) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    );

    return mergeConfig(baseConfig, userConfig);
  }
};
export default config;
