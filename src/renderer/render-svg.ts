import { renderTheme, themes } from './theme/awesome-card';
import { renderHorizontal } from './type/horizontal-card';
import { renderVertical } from './type/vertical-card';

export type CardType = 'vertical' | 'horizontal' | undefined;

export const renderSVG = (
  data: { quote: string; author: string },
  type: CardType,
  theme: keyof typeof themes
) => {
  const { quote, author } = data;

  // If the theme exists in the list of themes, render the specific theme.
  // Else, render the default theme.
  const color = renderTheme(theme);

  switch (type) {
    case 'vertical':
      return renderVertical({ quote, author, color });
    case 'horizontal':
      return renderHorizontal({ quote, author, color });
    default:
      return renderVertical({ quote, author, color });
  }
};
