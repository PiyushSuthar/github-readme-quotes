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

export const renderTheme = (theme: keyof typeof themes, customColors?: CustomColors): Theme | null => {
  let baseTheme: Theme;

  // If no theme, return null
  if (theme == null) {
    return null;
  }
  
  if (themes[theme] && theme !== 'light' && theme !== 'dark') {
    baseTheme = themes[theme];
  } else if (theme == 'dark') {
    baseTheme = themes.defaultDarkModeSupport;
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

// Gets dynamic styles for the quote
export const getThemeStyles = (color : Theme | null, border: boolean) : string => {
  // If there is a matching theme, use its styles
  if (color) {
    return `
      .container {
        background-color: #${color.background};
        border: ${border ? "3px solid #"+color.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
      }
      .container h3 {
        color: #${color.quote};
      }
      .container h3::before, .container h3::after {
        color: #${color.symbol};
      }
      .container p {
        color: #${color.author};
      }
    `;
  }
  // If there is no theme explicitly provided, render dark/light mode
  // based on user's color preferences.
  return `
    /* Default light theme */
    .container {
      background-color: #${themes.default.background};
      border: ${border ? "3px solid #"+themes.default.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
    }
    .container h3 {
      color: #${themes.default.quote};
    }
    .container h3::before, .container h3::after {
      color: #${themes.default.symbol};
    }
    .container p {
      color: #${themes.default.author};
    }
    
    /* Override for dark mode based on system settings */
    @media (prefers-color-scheme: dark) {
      .container {
        background-color: #${themes.defaultDarkModeSupport.background};
        border: ${border ? "3px solid #"+themes.defaultDarkModeSupport.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
      }
      .container h3 {
        color: #${themes.defaultDarkModeSupport.quote};
      }
      .container h3::before, .container h3::after {
        color: #${themes.defaultDarkModeSupport.symbol};
      }
      .container p {
        color: #${themes.defaultDarkModeSupport.author};
      }
    }
  `;
}
