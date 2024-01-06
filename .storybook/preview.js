import '../src/app.css'
import { withThemeByClassName } from '@storybook/addon-themes'
import ThemeDecorator from './theme-decorator.svelte'

/** @type { import('@storybook/svelte').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        () => ThemeDecorator,
        withThemeByClassName({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
}

export default preview
