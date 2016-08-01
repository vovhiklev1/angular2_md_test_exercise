import {provideRouter, RouterConfig}  from '@angular/router';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {CorrectiveActionsComponent} from './corrective-actions/corrective-actions.component';
import {SubmitComponent} from './submit/submit.component';

const routes:RouterConfig = [
    {
        path: 'generalInfo',
        component: GeneralInfoComponent
    }
    , {
        path: 'correctiveActions',
        component: CorrectiveActionsComponent
    }, {
        path: 'submit',
        component: SubmitComponent
    }
];


export const appRouterProviders = [
    provideRouter(routes)
];