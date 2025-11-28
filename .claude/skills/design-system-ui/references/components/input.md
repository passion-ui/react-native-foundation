# Input Components

## InputRef (shared)

```typescript
type InputRef = {
  focus(): void;
  blur(): void;
  clear(): void;
  setText(value: string): void;
};
```

## Input

```typescript
type InputProps = TextInputProps & {
  size?: 'small' | 'medium' | 'large';
  floatingValue?: string;                   // floating label text
  floatingIcon?: string;                    // icon name for floating label
  floatingIconColor?: string;
  error?: string;                           // error message below
  leading?: string | ReactNode;             // left icon
  trailing?: string | ReactNode;            // right icon
  iconColor?: string;
  disabled?: boolean;
  required?: boolean;                       // shows * after label
};
```

## InputTextArea

```typescript
type InputTextAreaProps = TextInputProps & {
  floatingValue?: string;
  floatingIcon?: string;
  floatingIconColor?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
};
```

Multi-line. Sets `multiline={true}` internally.

## InputSearch

```typescript
type InputSearchProps = TextInputProps & {
  size?: 'small' | 'medium' | 'large';
  icon?: string | ReactNode;
  iconColor?: string;
  onPressIcon?: () => void;
  useShadow?: boolean;
};
```

## InputOTP

```typescript
type InputOTPProps = Omit<TextInputProps, 'placeholder' | 'placeholderTextColor'> & {
  length?: number;                        // default: 10
  dataType?: 'string' | 'number';
  floatingValue?: string;
  error?: string;
};
```

Individual character cells with auto-advance and backspace.

## InputMoney

```typescript
type InputMoneyProps = InputProps & {
  currency?: string;                      // e.g., '$', 'VND'
};
```

## InputDropDown

```typescript
type InputDropDownProps = TextInputProps & {
  size?: 'small' | 'medium' | 'large';
  floatingValue?: string;
  floatingIcon?: string;
  leading?: string | ReactNode;
  error?: string;
  trailing?: string | ReactNode;          // default: chevron-down
  disabled?: boolean;
  floatingIconColor?: string;
  required?: boolean;
  onPress: () => void;                    // required — opens picker
};
```

Read-only, triggers `onPress` (typically opens SheetPicker via `navigator.showBottomSheet`).
