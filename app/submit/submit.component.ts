import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {JQueryComponent} from './jquery.component'

@Component({
    selector: 'submit',
    providers: [],
    directives: [JQueryComponent, ROUTER_DIRECTIVES],
    templateUrl: './app/submit/submit.component.html',
    stylesUrls: ['./app/submit/submit.component.css']
})
export class SubmitComponent {


}