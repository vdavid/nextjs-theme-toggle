# Next.js Theme Toggle

A simple, customizable theme toggle switch for Next.js projects using a theme provider such as [next-themes](https://github.com/pacocoursey/next-themes).

[View on GitHub](https://github.com/vdavid/nextjs-theme-toggle)

## Features

- Easy integration with Next.js and next-themes
- Minimal and clean design
- Supports hiding on small screens

## Installation

To install the package, run the following command:

```bash
npm install nextjs-theme-toggle
```

or if you are using yarn:

```bash
yarn add nextjs-theme-toggle
```

## Usage

To use the ThemeToggle component, simply import it into your project and add it to your JSX:

```jsx
import ThemeToggle from 'nextjs-theme-toggle';
import { useTheme } from 'next-themes'

function MyApp() {
    return (
        <div>
            {/* Your other components */}
            <ThemeToggle useTheme={useTheme} hideOnSmallScreens />
        </div>
    );
}
```

Make sure to add `next-themes` to your Next.js project.

## Props

| Prop                 | Type                                                          | Default | Description                                                                                    |
|----------------------|---------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------|
| `useTheme`           | `() => { theme?: string, setTheme: (theme: string) => void }` | -       | Function to provide theme and setTheme methods from a theme provider (typically `next-themes`) |
| `hideOnSmallScreens` | `boolean`                                                     | `false` | Hides the toggle on screens narrower than 1065px                                               |

## Contributing

Contributions are welcome! Please submit a pull request or create an issue for any bug reports or feature requests.

## License

ISC
