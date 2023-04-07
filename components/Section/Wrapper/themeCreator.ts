import THEMES from '~/constants/Themes';

export const createTheme = (theme: THEMES) => {
  switch (theme) {
    case THEMES.Classic:
      return CLASSIC;
    default:
      return CLASSIC;
  }
};

const CLASSIC = {
  h2: 'text-xl',
  div_container: 'w-80% m-10'
};
