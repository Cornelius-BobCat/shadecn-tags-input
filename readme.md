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
- 📦 Zero-install - copy and paste the code
- 🎮 Easy to use API
- 🎯 Maximum tags limit
- 🔍 Suggestion-only mode

## Installation

```bash
# Add the component to your project
npx @vincentcornelius/shadecn-tags-input add
```

## Prerequisites

This component is built on top of shadcn/ui. Make sure you have it set up in your project:

```bash
npx shadcn-ui@latest init
```

## Usage

After installation, you can import and use the component:

```tsx
"use client";

import { Tag, TagsInput, TagErrorCode } from "@/components/ui/tags-input";
import { useState } from "react";

export default function CreateLinkTags() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const suggestions: Tag[] = [
    { id: "1", name: "JavaScript" },
    { id: "2", name: "TypeScript" },
    { id: "3", name: "React" },
    { id: "4", name: "Vue" },
    { id: "5", name: "Angular" },
    { id: "6", name: "Svelte" },
    { id: "7", name: "Next.js" },
    { id: "8", name: "Nuxt.js" },
    { id: "9", name: "Tailwind" },
    { id: "10", name: "CSS" },
    { id: "11", name: "HTML" },
    { id: "12", name: "PHP" },
    { id: "13", name: "Python" },
    { id: "14", name: "Java" },
  ];

  const handleError = (code: TagErrorCode) => {
    switch (code) {
      case "E01":
        console.log("E01: Tag already exists");
        break;
      case "E02":
        console.log("E02: Tag not found in suggestions");
        break;
    }
  };

  return (
    <TagsInput
      value={selectedTags}
      onChange={setSelectedTags}
      suggestions={suggestions}
      onlyFromSuggestions={true}
      maxTags={3}
      onError={handleError}
      placeholder="add tag & press enter"
    />
  );
}
```

## Props

| Prop                    | Type                           | Default     | Description                      |
| ----------------------- | ------------------------------ | ----------- | -------------------------------- |
| `value`                 | `Tag[]`                        | Required    | Array of current tags            |
| `onChange`              | `(tags: Tag[]) => void`        | Required    | Callback when tags change        |
| `suggestions`           | `Tag[]`                        | `[]`        | Array of suggestion tags         |
| `className`             | `string`                       | `undefined` | Container class name             |
| `inputClassName`        | `string`                       | `undefined` | Input field class name           |
| `badgeClassName`        | `string`                       | `undefined` | Tag badge class name             |
| `badgeCloseClassName`   | `string`                       | `undefined` | Close button class name          |
| `autocompleteClassName` | `string`                       | `undefined` | Suggestions dropdown class name  |
| `onlyFromSuggestions`   | `boolean`                      | `false`     | Only allow tags from suggestions |
| `maxTags`               | `number`                       | `undefined` | Maximum number of tags allowed   |
| `onError`               | `(code: TagErrorCode) => void` | `undefined` | Error callback                   |
| `placeholder`           | `string`                       | `undefined` | Input placeholder text           |

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
  autocompleteClassName="bg-background"
  // ... other props
/>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Vincent Cornelius](https://glups.uno/my-linkedin)
