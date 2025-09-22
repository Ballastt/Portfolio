import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []), // alle Provider aus appConfig übernehmen
    provideRouter(routes), // zusätzlich den Router
  ],
}).catch((err) => console.error(err));
