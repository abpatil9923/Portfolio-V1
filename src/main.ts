import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Function to load translation files
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    TranslateService,
  ],
}).catch((err) => console.error(err));
