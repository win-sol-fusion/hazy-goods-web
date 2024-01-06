import StoryDecorator from './story-decorator.svelte'
import TextInput from './text-input.svelte'

let value = 'foo'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    argTypes: {},
    // decorators: [() => StoryDecorator],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        inputValue: value,
        label: 'First Name',
        placeholder: 'type your first name here',
        validationErrors: [],
    },
}

export const Errors = {
    args: {
        inputValue: value,
        label: 'First Name',
        placeholder: 'type your first name here',
        validationErrors: ['This is a validation error'],
    },
}
