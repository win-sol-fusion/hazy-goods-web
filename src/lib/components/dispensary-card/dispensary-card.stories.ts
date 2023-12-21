import DispensaryCard from './dispensary-card.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/DispensaryCard',
    component: DispensaryCard,
    tags: ['autodocs'],
    argTypes: {},
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        dispensary: {
            name: 'My First Dispensary',
            address_1: '1600 Pennsylvania Ave',
            address_2: 'Suite 100',
            city: 'Washington',
            postal_code: '01111',
        },
    },
}
