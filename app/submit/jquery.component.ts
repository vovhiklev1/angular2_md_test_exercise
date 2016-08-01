import {Component} from "@angular/core";
import {ElementRef} from "@angular/core";
import {OnInit} from "@angular/core";
declare var jQuery:any;

@Component({
    selector: 'my-jquery',
    providers: [],
    // directives: [ROUTER_DIRECTIVES],
    template: '<button>btn</button>',
    stylesUrls: ['./app/submit/submit.component.css']
})
export class JQueryComponent implements OnInit {

    constructor(private _elRef:ElementRef) {
    }

    ngOnInit():any {

        jQuery(this._elRef.nativeElement).find('button').on('click', function () {
                alert('ok')
            }

        )
    }


}