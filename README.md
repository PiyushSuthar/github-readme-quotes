<p align="center">
  <img align="center" width="100" src="assets/logo.png" />

  <h1 align="center">Github Readme Quotes</h1>
  <h3 align="center">Developer Quotes for your Github Readme.</h3>
</p>

<!-- Badges -->
<p align="center">
  <a href="https://github.com/PiyushSuthar/github-readme-quotes/issues">
    <img src="https://img.shields.io/github/issues/PiyushSuthar/github-readme-quotes?style=flat-square">
  </a>

  <a href="https://github.com/PiyushSuthar/github-readme-quotes/pulls">
    <img src="https://img.shields.io/github/issues-pr/PiyushSuthar/github-readme-quotes?style=flat-square">
  </a>
  
  <a href="https://twitter.com/piyushsthr" target="_blank">
    <img alt="Twitter: piyushsthr" src="https://img.shields.io/twitter/follow/piyushsthr.svg?style=social" />
  </a>
</p>

<!-- Links -->
<p align="center">
  <a href="https://quotes-github-readme.vercel.app/api" target="_blank">View Demo</a>
  <span· </span>
  <a href="https://github.com/piyushsuthar/github-readme-quotes/issues" target="_blank">Report Bug</a>
</p>

## Features ✨

- [Dynamic quotes in your GitHub README](#Usage)
- [Customize your own quote](#Custom)

## Usage ⚡️

Copy the markdown below and paste it in your Github Readme.

```md
[![Readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark)](https://github.com/piyushsuthar/github-readme-quotes)
```

### Options

| Options | Default  | Description                                                                                 |
| ------- | -------- | ------------------------------------------------------------------------------------------- |
| type    | vertical | Available: horizontal, vertical                                                             |
| theme   | light    | [Available themes](#themes)                                                                 |
| quote   | -        | Customize your quote                                                                        |
| author  | -        | The name of the quote's author                                                              |
| border  | false    | Available: true, false                                                                      |

<details id="themes">
<summary>Themes</summary>

- light
- dark
- algolia
- catppuccin
- catppuccin_frappe
- catppuccin_latte
- catppuccin_macchiato
- catppuccin_mocha
- chartreuse-dark
- dracula
- github
- github_dark
- github_blue
- graywhite
- gruvbox
- hackerman
- merko
- monokai
- moonlight
- nord
- radical
- shadow_blue
- shadow_green
- shadow_red
- tokyonight

</details>

## Installation and Development 🚀

To get started with developing this app locally, here are the steps:

Install the dependencies for the app using,

```sh
pnpm install
```

And then run the app using:

```sh
npx vercel dev
```

## Customization

### Horizontal

Add the **?type=horizontal** parameter.

[![readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal)](https://github.com/piyushsuthar/github-readme-quotes)

### Border

Add the **?border=true** parameter.

[![readme Quotes](https://quotes-github-readme.vercel.app/api?border=true)](https://github.com/piyushsuthar/github-readme-quotes)


### Themes

dark

[![readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark)](https://github.com/piyushsuthar/github-readme-quotes)

catppuccin_mocha

[![readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=catppuccin_mocha)](https://github.com/piyushsuthar/github-readme-quotes)

tokyonight

[![readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight)](https://github.com/piyushsuthar/github-readme-quotes)

monokai

[![readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=monokai)](https://github.com/piyushsuthar/github-readme-quotes)

github_dark

[![readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=github_dark)](https://github.com/piyushsuthar/github-readme-quotes)

## Custom

### Custom Quotes

Add the **?quote=Your Quote** parameter.
You must [URL encode](https://en.wikipedia.org/wiki/Percent-encoding) your quote.

[![readme Quotes](https://quotes-github-readme.vercel.app/api?quote=My%20Quote&type=horizontal)](https://github.com/piyushsuthar/github-readme-quotes)

### Custom Colors

You can also customize colors directly via query parameters:

- `quoteColor`: Color for the quote text (hex code without #)
- `authorColor`: Color for the author text (hex code without #)
- `backgroundColor`: Color for the background (hex code without #)
- `symbolColor`: Color for the quote symbols (hex code without #)

Examples:

1. `?quoteColor=ff0000&authorColor=00ff00&backgroundColor=0000ff&symbolColor=ffff00`

[![Readme Quotes](https://quotes-github-readme.vercel.app/api?quoteColor=ff0000&authorColor=00ff00&backgroundColor=0000ff&symbolColor=ffff00&type=horizontal)](https://github.com/piyushsuthar/github-readme-quotes)


2. `?theme=dark&quoteColor=ff0000` (This will use the dark theme but override the quote color with red.)

[![Readme Quotes](https://quotes-github-readme.vercel.app/api?theme=dark&quoteColor=ff0000&type=horizontal)](https://github.com/piyushsuthar/github-readme-quotes)

## Contributing 🤝

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/PiyushSuthar/github-readme-quotes/issues).

## Special Thanks ❤

- Inspired from [AnuragHazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats).
- [skolakoda/programming-quotes-api](https://github.com/skolakoda/programming-quotes-api) for Quotes API.
- And a huge shoutout to [Mini Ware](https://github.com/Mini-Ware) for his immense contribution to this project!

## Show your support 🌈

Be sure to drop a 🌟 if you like the project!

## Author 🤗

👤 **Piyush Suthar**

- Website: https://piyushsuthar.github.io
- Twitter: [@piyushsthr](https://twitter.com/piyushsthr)
- Github: [@PiyushSthr](https://github.com/PiyushSthr)
- LinkedIn: [@piyushsthr](https://linkedin.com/in/piyushsthr)

<div align="center">Made by Piyush with ❤ and TypeScript</div>
