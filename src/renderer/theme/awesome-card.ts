import themesData from '../../../data/themes.json';

export interface Theme {
  quote: string;
  author: string;
  background: string;
  symbol: string;
}

export interface CustomColors {
  quote?: string;
  author?: string;
  background?: string;
  symbol?: string;
}

export const themes: Record<string, Theme> = themesData;

export const renderTheme = (theme: keyof typeof themes, customColors?: CustomColors) => {
  let baseTheme: Theme;

  if (themes[theme] && theme !== 'light' && theme !== 'dark') {
    baseTheme = themes[theme];
  } else {
    baseTheme = themes.default;
  }

  if (!customColors) {
    return baseTheme;
  }

  return {
    quote: customColors.quote || baseTheme.quote,
    author: customColors.author || baseTheme.author,
    background: customColors.background || baseTheme.background,
    symbol: customColors.symbol || baseTheme.symbol
  };
};
