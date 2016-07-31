import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {GeneralInfoIntreface}  from './general-info.interface';
import {FORM_PROVIDERS, ControlGroup, Validators, FormBuilder}  from '@angular/common';

@Component({
    selector: 'general-info',
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/general-info/general-info.component.html',
    styles: [`
      .ng-invalid{
        border:1px solid red;
      }
    `]
})
export class GeneralInfoComponent {
    myForm:ControlGroup;
    public dateTimeIncident = 'hi';

    generalInfoData:GeneralInfoIntreface;

    /*  constructor() {
     //initialize newContact to empty object
     this.generalInfoData = {dateTimeIncident: '', reportedBy: '', company: ''};
     }*/

    constructor(private _formBuilder:FormBuilder) {
        this.myForm = this._formBuilder.group({
            'dateTimeIncident': ['', Validators.required],
            'reportedBy': ['', Validators.required],
            'company': ['1', Validators.required]
        })
    }

    onAddContact(value) {
        console.log("Submitted value");
        console.log(value);
        if (this.myForm.dirty && this.myForm.valid) {

        }
    }

    // this._contactService.insertContact(value);
    //   this._router.navigate(['Contacts']);

}