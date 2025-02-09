# @vincentcornelius/shadecn-tags-input

A beautiful and customizable tags input component for ShadcnUI and React applications. This component provides a seamless way to handle multiple tags with suggestions, keyboard navigation, and customizable styling.

![NPM Version](https://img.shields.io/npm/v/@vincentcornelius/shadecn-tags-input)
![License](https://img.shields.io/badge/Licence-MIT-green)

## Features

- 🎯 Fully integrated with ShadcnUI
- ⌨️ Keyboard navigation
- 🔍 Auto-suggestions with filtering
- 🎨 Highly customizable styling
- 🔒 TypeScript
- ⚡ Lightweight

## Installation

```bash
npm install @vincentcornelius/shadecn-tags-input
```

## Usage

```tsx
import { TagsInput } from "@vincentcornelius/shadecn-tags-input";
import { useState } from "react";

function Example() {
  const [tags, setTags] = useState([]);

  return (
    <TagsInput
      value={tags}
      onChange={setTags}
      suggestions={[
        { id: "1", name: "React" },
        { id: "2", name: "TypeScript" },
        { id: "3", name: "JavaScript" },
      ]}
    />
  );
}
```

## Props

| Prop                  | Type                           | Default     | Description                      |
| --------------------- | ------------------------------ | ----------- | -------------------------------- |
| `value`               | `Tag[]`                        | Required    | Array of current tags            |
| `onChange`            | `(tags: Tag[]) => void`        | Required    | Callback when tags change        |
| `suggestions`         | `Tag[]`                        | `[]`        | Array of suggestion tags         |
| `className`           | `string`                       | `undefined` | Container class name             |
| `inputClassName`      | `string`                       | `undefined` | Input field class name           |
| `badgeClassName`      | `string`                       | `undefined` | Tag badge class name             |
| `badgeCloseClassName` | `string`                       | `undefined` | Close button class name          |
| `tagsAlerts`          | `boolean`                      | `false`     | Enable tag alerts                |
| `onlyFromSuggestions` | `boolean`                      | `false`     | Only allow tags from suggestions |
| `onError`             | `(code: TagErrorCode) => void` | `undefined` | Error callback                   |

## Features

### Keyboard Navigation

- `Enter`: Add a tag
- `Backspace`: Remove the last tag (when input is empty)
- `Arrow Up/Down`: Navigate through suggestions
- `Escape`: Close suggestions

### Error Handling

The component provides two error codes:

- `E01`: Tag already exists
- `E02`: Tag not in suggestions (when `onlyFromSuggestions` is true)

## Customization

The component is built with ShadcnUI, making it easy to customize using Tailwind CSS classes:

```tsx
<TagsInput
  className="w-full max-w-md"
  inputClassName="placeholder:text-gray-400"
  badgeClassName="bg-primary text-primary-foreground"
  badgeCloseClassName="hover:bg-primary/20"
  // ... other props
/>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Vincent Cornelius](https://glups.uno/my-linkedin)
