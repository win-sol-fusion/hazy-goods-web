import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import { skeleton } from '@skeletonlabs/tw-plugin'

const config = {
    // 2. Opt for dark mode to be handled via the class method
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './.storybook/**/*.{html,js,svelte,ts}',
        // 3. Append the path to the Skeleton package
        join(
            require.resolve('@skeletonlabs/skeleton'),
            '../**/*.{html,js,svelte,ts}'
        ),
    ],
    theme: {
        colors: {},
        extend: {},
    },
    plugins: [
        forms,
        // According to the Skeleton docs, the Skeleton plugin should be last
        skeleton({
            themes: { preset: ['vintage'] },
        }),
    ],
} satisfies Config

export default config
