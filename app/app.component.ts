import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import {provideRouter, ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';
//import {provideRouter, RouterConfig}  from '@angular/router';

import {GeneralInfoComponent} from "./general-info/general-info.component"
//import {CorrectiveActionsComponent} from "./corrective-actions/corrective-actions.component"
//import {SubmitComponent} from "./submit/submit.component"

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    // styleUrls: ['src/css/app.css'],
     directives: [ROUTER_DIRECTIVES]
   // providers: [provideRouter]
})

export class AppComponent {

}