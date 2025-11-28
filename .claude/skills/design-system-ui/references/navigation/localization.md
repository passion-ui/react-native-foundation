# Localization Setup

```typescript
import { Localization } from '@passionui/react-native-foundation';

const localization = new Localization({
  resources: {
    en: { translation: { home: 'Home', settings: 'Settings' } },
    vi: { translation: { home: 'Trang chủ', settings: 'Cài đặt' } },
  },
  lng: 'en',
});

// Pass to NavigationContainer
<NavigationContainer localization={localization} ... />

// Access anywhere via context
const { translate } = useContext(ApplicationContext);
<Text>{translate('home')}</Text>

// Switch language at runtime
DeviceEventEmitter.emit('onChangeLanguage', 'vi');
```
