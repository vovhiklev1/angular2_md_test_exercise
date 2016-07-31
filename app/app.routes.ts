import {provideRouter, RouterConfig}  from '@angular/router';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {CorrectiveActionsComponent} from './corrective-actions/corrective-actions.component';

const routes:RouterConfig = [
    {
        path: 'generalInfo',
        component: GeneralInfoComponent
    }
    , {
        path: 'correctiveActions',
        component: CorrectiveActionsComponent}
];


export const appRouterProviders = [
    provideRouter(routes)
];