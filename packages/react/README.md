<h1 align="center">🪶Lightweight Components for React Apps</h1>
<br/>

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/@merely-ui/react"/>
  <a href="https://github.com/merely-ui/merely-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://badgen.net/github/license/merely-ui/merely-ui"/>
  </a>
</p>

<br/>

## Documentation

Website for documentation is under development and will be ready soon ^\_^

## Features

- Styling Props: Merely UI provides a set of styling props that make it easy to style your components directly in JSX.
- Bundle-Friendly: Merely UI bundle size is really small and amounts to 3.3kb at minzipped variant.
- Color Mode Switch: Merely UI has easy color mode switching out-of-the-box and all components are compatible with Light and Dark mode.
- Accessible. Merely UI components follow the WAI-ARIA guidelines specifications.

## Installation

```sh
# with Yarn
$ yarn add @merely-ui/react

# with npm
$ npm i @merely-ui/react

# with pnpm
$ pnpm add @merely-ui/react

# with Bun
$ bun add @merely-ui/react
```

## Usage

Before using the components, please do this:

1. Wrap your application with the `MerelyProvider` provided by
   **@merely-ui/react**.

```jsx
...
import { MerelyProvider } from "@merely-ui/react"

// Do this at the root of your application
ReactDOM.createRoot(document.getElementById('root')!).render(
 <StrictMode>
   <MerelyProvider>
     <App />
   </MerelyProvider>
 </StrictMode>
)
```

2. Use Merely UI components:

```jsx
import { Button } from '@merely-ui/react'

function App() {
	return <Button>Click me!</Button>
}
```

## License

MIT
