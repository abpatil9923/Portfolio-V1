import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideTranslateService } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideTranslateService()],
};
