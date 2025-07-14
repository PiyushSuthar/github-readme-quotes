import { renderTheme, themes } from './theme/awesome-card';
import { renderHorizontal } from './type/horizontal-card';
import { renderVertical } from './type/vertical-card';

export type CardType = 'vertical' | 'horizontal' | undefined;

export interface CustomColors {
  quote?: string;
  author?: string;
  background?: string;
  symbol?: string;
}

export const renderSVG = (
  data: { quote: string; author: string },
  type: CardType,
  theme: keyof typeof themes,
  border: boolean,
  customColors?: CustomColors
) => {
  const { quote, author } = data;

  // If the theme exists in the list of themes, render the specific theme.
  // Else, render the default theme.
  // Also pass custom colors for overriding theme values
  const color = renderTheme(theme, customColors);

  switch (type) {
    case 'vertical':
      return renderVertical({ quote, author, color, border });
    case 'horizontal':
      return renderHorizontal({ quote, author, color, border });
    default:
      return renderVertical({ quote, author, color, border });
  }
};
