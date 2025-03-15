export interface Theme {
  quote: string;
  author: string;
  background: string;
  symbol: string;
}

export const themes: Record<string, Theme> = {
  default: {
    quote: "434d58",
    author: "4c71f2",
    background: "fffefe",
    symbol: "2f80ed",
  },
  default_repocard: {
    quote: "434d58",
    author: "586069",
    background: "fffefe",
    symbol: "2f80ed",
  },
  transparent: {
    quote: "417E87",
    author: "0579C3",
    background: "ffffff00",
    symbol: "006AFF",
  },
  shadow_red: {
    quote: "444",
    author: "4F0000",
    background: "ffffff00",
    symbol: "9A0000",
  },
  shadow_green: {
    quote: "444",
    author: "003D00",
    background: "ffffff00",
    symbol: "007A00",
  },
  shadow_blue: {
    quote: "444",
    author: "004450",
    background: "ffffff00",
    symbol: "00779A",
  },
  dark: {
    quote: "9f9f9f",
    author: "79ff97",
    background: "151515",
    symbol: "fff",
  },
  radical: {
    quote: "a9fef7",
    author: "f8d847",
    background: "141321",
    symbol: "fe428e",
  },
  merko: {
    quote: "68b587",
    author: "b7d364",
    background: "0a0f0b",
    symbol: "abd200",
  },
  gruvbox: {
    quote: "8ec07c",
    author: "fe8019",
    background: "282828",
    symbol: "fabd2f",
  },
  gruvbox_light: {
    quote: "427b58",
    author: "af3a03",
    background: "fbf1c7",
    symbol: "b57614",
  },
  tokyonight: {
    quote: "38bdae",
    author: "bf91f3",
    background: "1a1b27",
    symbol: "70a5fd",
  },
  onedark: {
    quote: "df6d74",
    author: "8eb573",
    background: "282c34",
    symbol: "e4bf7a",
  },
  cobalt: {
    quote: "75eeb2",
    author: "0480ef",
    background: "193549",
    symbol: "e683d9",
  },
  synthwave: {
    quote: "e5289e",
    author: "ef8539",
    background: "2b213a",
    symbol: "e2e9ec",
  },
  highcontrast: {
    quote: "fff",
    author: "00ffff",
    background: "000",
    symbol: "e7f216",
  },
  dracula: {
    quote: "f8f8f2",
    author: "79dafa",
    background: "282a36",
    symbol: "ff6e96",
  },
  prussian: {
    quote: "6e93b5",
    author: "38a0ff",
    background: "172f45",
    symbol: "bddfff",
  },
  monokai: {
    quote: "f1f1eb",
    author: "e28905",
    background: "272822",
    symbol: "eb1f6a",
  },
  vue: {
    quote: "273849",
    author: "41b883",
    background: "fffefe",
    symbol: "41b883",
  },
  "vue-dark": {
    quote: "fffefe",
    author: "41b883",
    background: "273849",
    symbol: "41b883",
  },
  "shades-of-purple": {
    quote: "a599e9",
    author: "b362ff",
    background: "2d2b55",
    symbol: "fad000",
  },
  nightowl: {
    quote: "7fdbca",
    author: "ffeb95",
    background: "011627",
    symbol: "c792ea",
  },
  buefy: {
    quote: "363636",
    author: "ff3860",
    background: "ffffff",
    symbol: "7957d5",
  },
  "blue-green": {
    quote: "0cf574",
    author: "f5b700",
    background: "040f0f",
    symbol: "2f97c1",
  },
  algolia: {
    quote: "FFFFFF",
    author: "2DDE98",
    background: "050F2C",
    symbol: "00AEFF",
  },
  "great-gatsby": {
    quote: "ffd95b",
    author: "ffb74d",
    background: "000000",
    symbol: "ffa726",
  },
  darcula: {
    quote: "BEBEBE",
    author: "84628F",
    background: "242424",
    symbol: "BA5F17",
  },
  bear: {
    quote: "bcb28d",
    author: "00AEFF",
    background: "1f2023",
    symbol: "e03c8a",
  },
  "solarized-dark": {
    quote: "859900",
    author: "b58900",
    background: "002b36",
    symbol: "268bd2",
  },
  "solarized-light": {
    quote: "859900",
    author: "b58900",
    background: "fdf6e3",
    symbol: "268bd2",
  },
  "chartreuse-dark": {
    quote: "fff",
    author: "00AEFF",
    background: "000",
    symbol: "7fff00",
  },
  nord: {
    quote: "d8dee9",
    author: "88c0d0",
    background: "2e3440",
    symbol: "81a1c1",
  },
  gotham: {
    quote: "99d1ce",
    author: "599cab",
    background: "0c1014",
    symbol: "2aa889",
  },
  "material-palenight": {
    quote: "a6accd",
    author: "89ddff",
    background: "292d3e",
    symbol: "c792ea",
  },
  graywhite: {
    quote: "24292e",
    author: "24292e",
    background: "ffffff",
    symbol: "24292e",
  },
  "vision-friendly-dark": {
    quote: "ffffff",
    author: "785ef0",
    background: "000000",
    symbol: "ffb000",
  },
  "ayu-mirage": {
    quote: "c7c8c2",
    author: "73d0ff",
    background: "1f2430",
    symbol: "f4cd7c",
  },
  "midnight-purple": {
    quote: "ffffff",
    author: "9f4bff",
    background: "000000",
    symbol: "9745f5",
  },
  calm: {
    quote: "ebcfb2",
    author: "edae49",
    background: "373f51",
    symbol: "e07a5f",
  },
  "flag-india": {
    quote: "509E2F",
    author: "250E62",
    background: "ffffff",
    symbol: "ff8f1c",
  },
  omni: {
    quote: "E1E1E6",
    author: "e7de79",
    background: "191622",
    symbol: "FF79C6",
  },
  react: {
    quote: "ffffff",
    author: "61dafb",
    background: "20232a",
    symbol: "61dafb",
  },
  jolly: {
    quote: "ffffff",
    author: "a960ff",
    background: "291B3E",
    symbol: "ff64da",
  },
  maroongold: {
    quote: "E0AA3E",
    author: "F7EF8A",
    background: "260000",
    symbol: "F7EF8A",
  },
  yeblu: {
    quote: "ffffff",
    author: "ffff00",
    background: "002046",
    symbol: "ffff00",
  },
  blueberry: {
    quote: "27e8a7",
    author: "89ddff",
    background: "242938",
    symbol: "82aaff",
  },
  slateorange: {
    quote: "ffffff",
    author: "faa627",
    background: "36393f",
    symbol: "faa627",
  },
  kacho_ga: {
    quote: "d9c8a9",
    author: "a64833",
    background: "402b23",
    symbol: "bf4a3f",
  },
  outrun: {
    quote: "8080ff",
    author: "ff1aff",
    background: "141439",
    symbol: "ffcc00",
  },
  ocean_dark: {
    quote: "92D534",
    author: "FFFFFF",
    background: "151A28",
    symbol: "8957B2",
  },
  city_lights: {
    quote: "718CA1",
    author: "4798FF",
    background: "1D252C",
    symbol: "5D8CB3",
  },
  github_dark: {
    quote: "C3D1D9",
    author: "1F6FEB",
    background: "0D1117",
    symbol: "58A6FF",
  },
  github_dark_dimmed: {
    quote: "ADBAC7",
    author: "539bf5",
    background: "24292F",
    symbol: "539bf5",
  },
  discord_old_blurple: {
    quote: "FFFFFF",
    author: "7289DA",
    background: "2C2F33",
    symbol: "7289DA",
  },
  aura_dark: {
    quote: "dbdbdb",
    author: "6cffd0",
    background: "252334",
    symbol: "ff7372",
  },
  panda: {
    quote: "FF75B5",
    author: "19f9d899",
    background: "31353a",
    symbol: "19f9d899",
  },
  noctis_minimus: {
    quote: "c5cdd3",
    author: "72b7c0",
    background: "1b2932",
    symbol: "d3b692",
  },
  cobalt2: {
    quote: "0088ff",
    author: "ffffff",
    background: "193549",
    symbol: "ffc600",
  },
  swift: {
    quote: "000000",
    author: "f05237",
    background: "f7f7f7",
    symbol: "000000",
  },
  aura: {
    quote: "61ffca",
    author: "ffca85",
    background: "15141b",
    symbol: "a277ff",
  },
  apprentice: {
    quote: "bcbcbc",
    author: "ffffaf",
    background: "262626",
    symbol: "ffffff",
  },
  moltack: {
    quote: "574038",
    author: "86092C",
    background: "F5E1C0",
    symbol: "86092C",
  },
  codeSTACKr: {
    quote: "ffffff",
    author: "FFE400",
    background: "09131B",
    symbol: "ff652f",
  },
  rose_pine: {
    quote: "e0def4",
    author: "ebbcba",
    background: "191724",
    symbol: "9ccfd8",
  },
  catppuccin_latte: {
    quote: "4c4f69",
    author: "8839ef",
    background: "eff1f5",
    symbol: "137980",
  },
  catppuccin_mocha: {
    quote: "cdd6f4",
    author: "cba6f7",
    background: "1e1e2e",
    symbol: "94e2d5",
  },
  date_night: {
    quote: "E1B2A2",
    author: "BB8470",
    background: "170F0C",
    symbol: "DA7885",
  },
  one_dark_pro: {
    quote: "E5C06E",
    author: "C678DD",
    background: "23272E",
    symbol: "61AFEF",
  },
  rose: {
    quote: "862931",
    author: "B71F36",
    background: "e9d8d4",
    symbol: "8d192b",
  },
  holi: {
    quote: "D6E7FF",
    author: "5FABEE",
    background: "030314",
    symbol: "5FABEE",
  },
  neon: {
    quote: "FF449F",
    author: "00EAD3",
    background: "000000",
    symbol: "00EAD3",
  },
  blue_navy: {
    quote: "82AAFF",
    author: "82AAFF",
    background: "000000",
    symbol: "82AAFF",
  },
  calm_pink: {
    quote: "edae49",
    author: "ebcfb2",
    background: "2b2d40",
    symbol: "e07a5f",
  },
  ambient_gradient: {
    quote: "ffffff",
    author: "ffffff",
    background: "35,4158d0,c850c0,ffcc70",
    symbol: "ffffff",
  },
  //old themes
  //default: {
  //  quote: '333',
  //  author: '2f80ed',
  //  background: 'fffefe',
  //  symbol: '4c71f2'
  //},
  defaultDarkModeSupport: {
    quote: '9f9f9f',
    author: 'fff',
    background: '151515',
    symbol: '79ff97'
  },
  'chartreuse-dark': {
    quote: 'fff',
    author: '7fff00',
    background: '000',
    symbol: '00AEFF'
  },
  radical: {
    quote: 'a9fef7',
    author: 'fe428e',
    background: '141321',
    symbol: 'f8d847'
  },
  merko: {
    quote: '68b587',
    author: 'abd200',
    background: '0a0f0b',
    symbol: 'b7d364'
  },
  gruvbox: {
    quote: '8ec07c',
    author: 'fabd2f',
    background: '282828',
    symbol: 'fe8019'
  },
  tokyonight: {
    quote: '38bdae',
    author: '70a5fd',
    background: '1a1b27',
    symbol: 'bf91f3'
  },
  catppuccin: {
    quote: '96CDFB',
    author: 'D9E0EE',
    background: '161320',
    symbol: 'DDB6F2'
  },
  catppuccin_latte: {
    quote: '179299',
    author: '4c4f69',
    background: 'eff1f5',
    symbol: '8839ef'
  },
  catppuccin_frappe: {
    quote: '81c8be',
    author: 'c6d0f5',
    background: '303446',
    symbol: 'ca9ee6'
  },
  catppuccin_macchiato: {
    quote: '8bd5ca',
    author: 'cad3f5',
    background: '24273a',
    symbol: 'c6a0f6'
  },
  catppuccin_mocha: {
    quote: '94e2d5',
    author: 'cdd6f4',
    background: '1e1e2e',
    symbol: 'cba6f7'
  },
  algolia: {
    quote: '00ADFE',
    author: 'FEFEFE',
    background: '050F2C',
    symbol: '26BB85'
  },
  monokai: {
    quote: 'EA1F6A',
    author: 'CFCFC9',
    background: '272822',
    symbol: 'E18905'
  },
  dracula: {
    quote: 'F8F8F2',
    author: '6272A4',
    background: '282A36',
    symbol: 'FF79c6'
  },
  nord: {
    quote: 'D8DEE9',
    author: '4C566A',
    background: '2E3440',
    symbol: '88C0D0'
  },
  github: {
    quote: 'FFFFFF',
    author: '4C566A',
    background: '0D1117',
    symbol: '43C293'
  },
  graywhite: {
    quote: '24292E',
    author: '24292E"',
    background: 'FFFFFF',
    symbol: '24292E'
  },
  moonlight: {
    quote: 'F8F8F8',
    author: 'FF757F',
    background: '222436',
    symbol: '599DFF'
  },
  hackerman: {
    quote: '00B3D6',
    author: '00B3D6',
    background: '000000',
    symbol: '00B3D6'
  },
  shadow_red: {
    quote: '9A0000',
    author: '9A0000',
    background: '151515',
    symbol: '4F0000'
  },
  shadow_green: {
      quote: '007A00',
      author: '007A00',
      background: '151515',
      symbol: '003D00'
  },
  shadow_blue: {
      quote: '00779A',
      author: '00779A',
      background: '151515',
      symbol: '004490'
  }
};

export const renderTheme = (theme: keyof typeof themes) => {
  // Check if theme exists in the themes object and is neither default light nor dark mode theme
  if (themes[theme] && theme !== 'light' && theme !== 'dark') {
    return themes[theme];
  }

  // Else, return the default (light) theme with dark mode support
  return themes.default;
};
