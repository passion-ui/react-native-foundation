# Selection Components (CheckBox, Radio, Switch)

## CheckBox

```typescript
type CheckBoxProps = {
  value: boolean;
  disabled?: boolean;
  label?: string;
  onChange: (value: boolean) => void;
  indeterminate?: boolean;
  style?: StyleProp<ViewStyle>;
};
```

## Radio

```typescript
type RadioProps = {
  value: string;                          // this radio's value
  disabled?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  groupValue: string;                     // currently selected in group
  style?: StyleProp<ViewStyle>;
};
```

Selected when `value === groupValue`.

## Switch

```typescript
type SwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
```
