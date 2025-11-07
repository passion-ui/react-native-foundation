import i18n, { type Resource, type i18n as I18n } from 'i18next';
import { initReactI18next } from 'react-i18next';

class Localization {
  public instance: I18n = i18n.createInstance();

  constructor(data: {
    resources: Resource;
    lng?: string;
    fallbackLng?: string;
  }) {
    this.init(data).then();
  }

  private async init(data: {
    resources: Resource;
    lng?: string;
    fallbackLng?: string;
  }): Promise<boolean> {
    return this.instance
      .use(initReactI18next)
      .init({
        resources: data.resources,
        lng: data.lng,
        fallbackLng: data.fallbackLng,
        compatibilityJSON: 'v4',
        load: 'currentOnly',
      })
      .then(() => true);
  }

  public changeLanguage(language: string) {
    this.instance.changeLanguage(language).then();
  }
}

export { Localization };
