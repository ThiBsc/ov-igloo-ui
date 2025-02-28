# @shared/components

## 0.2.1

### Patch Changes

- 42efe0b: Fix issue where classNames were not passed to children when cloned

## 0.2.0

### Minor Changes

- 5402bcc: Created a "brand" toggle in the Toolbar and applied the new Workleap brand to some components. Also deprecated the Tag's appearance values and added new ones.

### Patch Changes

- Updated dependencies [5402bcc]
  - @igloo-ui/avatar@0.2.0
  - @igloo-ui/color@0.2.0

## 0.1.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.1.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.0

### Minor Changes

- 7dcba93: Updated VisualIdentifier so that the size is customizable. Default is still size small.

## 0.0.1

### Patch Changes

- fec4bb0: initial release of `Shared/components`
- Updated dependencies [2a6d8e5]
  - @igloo-ui/avatar@0.1.0
  - @igloo-ui/color@0.1.0
