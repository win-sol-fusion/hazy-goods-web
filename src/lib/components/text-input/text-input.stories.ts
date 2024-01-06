import TextInput from './text-input.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    argTypes: {},
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        label: 'First Name',
        inputValue: '',
        placeholder: 'type your first name here',
    },
}
