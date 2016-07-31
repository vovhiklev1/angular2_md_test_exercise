import { bootstrap }    from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.routes';
import { AppComponent } from './app.component';
import {FORM_PROVIDERS}     from '@angular/common';

bootstrap(AppComponent , [appRouterProviders, FORM_PROVIDERS]);

//https://github.com/bapatel1/Learning-Angular-2.0/tree/master/class-12_FormsWithAngularFormsBuilder/dev/contacts