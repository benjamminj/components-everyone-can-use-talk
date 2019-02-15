import theme from 'mdx-deck/themes';
import codeTheme from './styles/code';

export default {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#efefef',
  },
  prism: {
    style: codeTheme,
  },
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
