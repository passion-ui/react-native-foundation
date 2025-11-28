# Theme Switching

Dynamic theme changes at runtime via `DeviceEventEmitter`:

```typescript
import { DeviceEventEmitter } from 'react-native';
import { defaultTheme, defaultDarkTheme } from '@passionui/react-native-foundation';
import tinycolor from 'tinycolor2';

// In root App — listen for theme changes
useEffect(() => {
  const listener = DeviceEventEmitter.addListener('onChangeTheme', (params) => {
    let data = theme;

    if (params.dark !== undefined) {
      data = {
        ...data,
        colors: params.dark ? defaultDarkTheme.colors : defaultTheme.colors,
        dark: params.dark,
      };
    }
    if (params.font) {
      data = { ...data, font: params.font };
    }
    if (params.primary || params.secondary) {
      data = {
        ...data,
        colors: {
          ...data.colors,
          primary: buildColorSchema(params.primary),
          secondary: buildColorSchema(params.secondary),
        },
      };
    }
    setTheme({ ...data });
  });
  return () => listener.remove();
}, []);

const buildColorSchema = (color: string) => ({
  default: color,
  light: tinycolor(color).lighten(16).toHexString(),
  container: tinycolor(color).lighten(32).toHexString(),
});
```

Emit from anywhere:

```typescript
DeviceEventEmitter.emit('onChangeTheme', { dark: true });
DeviceEventEmitter.emit('onChangeTheme', { font: 'Poppins' });
DeviceEventEmitter.emit('onChangeTheme', { primary: '#FF5722' });
DeviceEventEmitter.emit('onChangeLanguage', 'vi');
```
