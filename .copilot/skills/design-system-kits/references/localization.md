# Localization Reference

Complete reference for the i18n / localization system in `@passionui/react-native-foundation`.

## Table of Contents

- [Setup](#setup)
- [Localization class](#localization-class)
- [Using translations in components](#using-translations-in-components)
- [Resource format](#resource-format)
- [Runtime language switching](#runtime-language-switching)
- [Patterns](#patterns)

---

## Setup

The localization system wraps **i18next** and **react-i18next** with a simple class-based API.

### 1. Create translation resource files

```typescript
// localization/en.json
{
  "welcome": "Welcome",
  "login": "Login",
  "settings": "Settings",
  "save": "Save",
  "cancel": "Cancel",
  "delete_confirm": "Are you sure you want to delete this item?",
  "items_count": "{{count}} items"
}

// localization/vi.json
{
  "welcome": "Chào mừng",
  "login": "Đăng nhập",
  "settings": "Cài đặt",
  "save": "Lưu",
  "cancel": "Hủy",
  "delete_confirm": "Bạn có chắc muốn xóa mục này không?",
  "items_count": "{{count}} mục"
}
```

### 2. Create Localization instance

```typescript
import { Localization } from '@passionui/react-native-foundation';
import en from './localization/en.json';
import vi from './localization/vi.json';

const localization = new Localization({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: 'en',           // default language
  fallbackLng: 'en',   // fallback if key not found in current language
});
```

### 3. Pass to NavigationContainer

```typescript
<NavigationContainer
  navigator={navigator}
  localization={localization}
  theme={theme}
  screens={screens}
/>
```

The `NavigationContainer` wraps the app with i18next's `I18nextProvider`, making translations available throughout the component tree.

---

## Localization class

```typescript
class Localization {
  constructor(config: {
    resources: i18n.Resource;   // { en: { translation: {...} }, vi: { translation: {...} } }
    lng?: string;               // current language code
    fallbackLng?: string;       // fallback language code
  });

  // Access the raw i18next instance (for advanced usage)
  get instance(): i18n;

  // Switch language at runtime
  changeLanguage(language: string): void;
}
```

**Configuration details:**
- Uses `compatibilityJSON: 'v4'` for i18next v4 plural rules
- Uses `load: 'currentOnly'` — only loads the active language (not all variants)
- Interpolation escaping is disabled (React handles XSS protection)

---

## Using translations in components

The translation function is distributed via `ApplicationContext`. Every component can access it:

```typescript
import { useContext } from 'react';
import { ApplicationContext } from '@passionui/react-native-foundation';

function MyScreen() {
  const { translate } = useContext(ApplicationContext);

  return (
    <Screen>
      <Text typography="title1">{translate('welcome')}</Text>
      <Button title={translate('save')} onPress={handleSave} />
      <Button title={translate('cancel')} onPress={handleCancel} type="outline" />
    </Screen>
  );
}
```

### The translate function

```typescript
type translate = (key: string) => string;
```

Pass a translation key and get back the localized string for the current language. If the key doesn't exist, it falls back to `fallbackLng`.

---

## Resource format

Resources follow i18next's standard structure:

```typescript
{
  languageCode: {
    translation: {
      key: "translated string",
      nested: {
        key: "nested translated string"
      }
    }
  }
}
```

### Interpolation

i18next supports variable interpolation with `{{variable}}` syntax:

```json
{
  "greeting": "Hello, {{name}}!",
  "items_count": "You have {{count}} items"
}
```

To use interpolation, access i18next directly:

```typescript
const { translate } = useContext(ApplicationContext);
// For simple keys:
translate('greeting');  // returns the template string

// For interpolation, use the i18next instance directly:
localization.instance.t('greeting', { name: 'John' });  // "Hello, John!"
```

### Nesting keys

You can organize translations into nested groups:

```json
{
  "auth": {
    "login": "Login",
    "logout": "Logout",
    "forgot_password": "Forgot password?"
  },
  "profile": {
    "title": "Profile",
    "edit": "Edit profile"
  }
}
```

Access nested keys with dot notation:

```typescript
translate('auth.login');      // "Login"
translate('profile.title');   // "Profile"
```

---

## Runtime language switching

Change the language at runtime without restarting the app:

```typescript
// Direct API
localization.changeLanguage('vi');

// In the example app, DeviceEventEmitter is used for cross-component communication:
import { DeviceEventEmitter } from 'react-native';

DeviceEventEmitter.emit('onChangeLanguage', 'vi');

// Listener in root component:
DeviceEventEmitter.addListener('onChangeLanguage', (language) => {
  localization.changeLanguage(language);
  // Re-render with new translate function
});
```

---

## Patterns

### Language selector with SheetPicker

```tsx
const languages = [
  { title: 'English', value: 'en', icon: <Image source={flags.en} /> },
  { title: 'Tiếng Việt', value: 'vi', icon: <Image source={flags.vi} /> },
];

navigator?.showBottomSheet({
  title: 'Select language',
  screen: (props) => (
    <SheetPicker
      {...props}
      data={languages}
      selected={languages.find(l => l.value === currentLang)}
      onSelect={(index) => {
        localization.changeLanguage(languages[index].value);
        setCurrentLang(languages[index].value);
      }}
    />
  ),
});
```

### Translated form with error messages

```tsx
function LoginForm() {
  const { translate } = useContext(ApplicationContext);
  const [emailError, setEmailError] = useState('');

  const validate = () => {
    if (!email) setEmailError(translate('errors.email_required'));
  };

  return (
    <Card>
      <Input
        floatingValue={translate('auth.email')}
        error={emailError}
        placeholder={translate('auth.email_placeholder')}
      />
      <SizedBox height={Spacing.M} />
      <Input
        floatingValue={translate('auth.password')}
        secureTextEntry
      />
      <SizedBox height={Spacing.L} />
      <Button title={translate('auth.login')} onPress={validate} full />
    </Card>
  );
}
```

### Adding a new language

1. Create a new JSON file (e.g., `fr.json`) with all translation keys
2. Add to the Localization resources:
   ```typescript
   const localization = new Localization({
     resources: {
       en: { translation: en },
       vi: { translation: vi },
       fr: { translation: fr },  // new
     },
     lng: 'en',
   });
   ```
3. Add to the language selector UI
4. That's it — all `translate()` calls will resolve from the new language when selected

### Translation key naming conventions

- Use snake_case for keys: `forgot_password`, `items_count`
- Group related keys by screen or feature: `auth.login`, `profile.edit`
- Use descriptive names: `delete_confirm` not `msg1`
- Include context in key name: `button_save`, `title_settings`
