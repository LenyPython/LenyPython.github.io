import THEMES from '~/constants/Themes';

export const useGetThemeStyles = (theme: THEMES) => {
  switch (theme) {
    case THEMES.Classic:
      return CLASSIC;
    default:
      return CLASSIC;
  }
};

const CLASSIC = {
  h2: 'text-3xl',
  div_container: 'w-80% m-10 bg-slate-200'
};
