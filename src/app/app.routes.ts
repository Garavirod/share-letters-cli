import { Routes, RouterModule } from '@angular/router';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";


const ROUTES: Routes = [
    {path: '', component: CredentialsComponent},
    {path: '', pathMatch: 'full', redirectTo: '' },
    {path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTES = RouterModule.forRoot( ROUTES );