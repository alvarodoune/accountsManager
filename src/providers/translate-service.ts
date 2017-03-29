import {Injectable, Inject} from '@angular/core';
import 'rxjs/add/operator/map';
import {TRANSLATIONS} from './translations'; // import our opaque token

@Injectable()
export class TranslateService {
      static cacheTranslation: any = {};
      private _currentLang: string;

      public get currentLang() {
            return this._currentLang;
      }

      // inject our translations
      constructor(@Inject(TRANSLATIONS) private _translations: any) {
      }

      public use(lang: string): void {
            this._currentLang = lang; // set current language
      }

      private translate(key: string): string {
            let result: string = key;

            if (key in TranslateService.cacheTranslation) {
                  return TranslateService.cacheTranslation[key];
            } else if (this.currentLang) {
                  result = this.deepGet(this._translations[this.currentLang], key.split('.'), key);
                  TranslateService.cacheTranslation[key] = result;

                  // } else if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
                  //       return this._translations[this.currentLang][key];
            }

            return result;
      }

      protected deepGet(obj: any, props: string[], defaultValue: string): string {
            // If we have reached an undefined/null property
            // then stop executing and return the default value.
            // If no default was provided it will be undefined.
            if (obj === undefined || obj === null) {
                  return defaultValue;
            }

            // If the path array has no more elements, we've reached
            // the intended property and return its value
            if (props.length === 0) {
                  return obj;
            }

            if (!obj.hasOwnProperty(props[0])) {
                  return defaultValue;
            }

            let value: any = obj;
            for (let i = 0; i < props.length; i++) {
                  if (value[props[i]] === undefined || value[props[i]] === null) {
                        return defaultValue;
                  }
                  value = value[props[i]];
            }
            return value;
      }


      public instant(key: string) {
            return this.translate(key); // public perform translation
      }
}