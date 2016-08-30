import { bootstrap } from '@angular/platform-browser-dynamic'; 
import { disableDeprecatedForms,provideForms } from '@angular/forms';
import { App,routes,providers } from './app';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';

bootstrap(App,[
    ...HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    ...providers,
    provideRouter(routes),
    { provide: LocationStrategy,useClass: HashLocationStrategy }
]);