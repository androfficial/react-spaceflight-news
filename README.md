# Spaceflight News

News reader for the Spaceflight News API: browse the latest spaceflight articles, filter them by keyword with the matches highlighted, and open any article on its own page. Built in December 2021 as a take-home assignment.

**Live demo:** [react-spaceflight-news.vercel.app](https://react-spaceflight-news.vercel.app)

## Features

- Loads the six latest articles and shows them as cards with an image, the publication date, the title and a summary, both cut to 100 characters.
- Filters the cards by keyword in titles and summaries, ignoring case. Cards that match in the title come first, and a counter shows the number of results.
- Highlights every match of the keyword inside the card titles and summaries.
- The card image, title and Read more link open the article page (`/posts/:id`) with the cover image, the full title and summary, and a Back to posts link that returns to the previous page.
- Shows a preloader while data loads and an error message when the API request fails.
- `/` redirects to `/posts`, and unknown paths show a 404 page with a button back to the list.

## Tech stack

- **Framework:** React 17, PropTypes
- **State:** Redux 4, Redux Thunk 2, React Redux 7
- **Data:** Axios 0.24, Spaceflight News API v4
- **Routing:** React Router 6
- **UI:** Material UI 5 (components and icons), Emotion 11
- **Styling:** SCSS (Dart Sass 1), classnames, local Roboto fonts
- **Tooling:** Create React App 4 with react-app-rewired and react-app-rewire-alias, ESLint 7 (Airbnb config), Stylelint 14, Prettier 2, Husky 7, lint-staged 12
- **Hosting:** Vercel

## Getting started

Requires Node.js 14 or 16 (Create React App 4 does not build on newer versions) and Yarn 1; the Spaceflight News API is public and needs no key.

```bash
git clone https://github.com/androfficial/react-spaceflight-news.git
cd react-spaceflight-news
yarn install
yarn start
```

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the development server |
| `yarn build` | Builds the production bundle into `build/` |
| `yarn eslint` | Lints the `.js` and `.jsx` files |
| `yarn eslint:fix` | Lints the `.js` and `.jsx` files and fixes what it can |
| `yarn stylelint` | Lints the SCSS files in `src/styles/` |
| `yarn stylelint:fix` | Lints the SCSS files and fixes what it can |
| `yarn format` | Checks formatting with Prettier |
| `yarn format:fix` | Formats the files with Prettier |

## Project structure

```text
src/
  api/          Axios instance and the two requests: article list and single article
  assets/       default card image, preloader and 404 illustration
  components/   App with the routes, Post card, Highlight, Preloader, Fail, NotFound
  pages/        Posts (list and keyword filter) and Article
  redux/        store, actions and reducers for the list and the article
  services/     text truncation and mobile detection helpers
  styles/       SCSS: local fonts, mixins, reset, UI blocks, page styles
```

## Notes

- `config-overrides.js` extends Create React App through react-app-rewired: it adds the `@api`, `@assets`, `@components`, `@pages`, `@redux`, `@services` and `@styles` import aliases and runs Stylelint in the development build.
- `yarn install` sets up Husky, whose pre-commit hook runs lint-staged: the Prettier check, ESLint and Stylelint.
- The API returns only a summary, so on the article page the summary is followed by four paragraphs of lorem ipsum placeholder text.
