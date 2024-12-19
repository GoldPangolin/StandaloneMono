import { AppComponent } from './app.component';
import { TaxReturnPageComponent } from './components/tax-return-page.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'tax-return',
        component: TaxReturnPageComponent
    }
];
