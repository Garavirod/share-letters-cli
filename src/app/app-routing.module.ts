import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialsComponent } from './views/credentials/credentials.component';

const routes: Routes = [
  {path: '', component: CredentialsComponent},
  {path: '', pathMatch: 'full', redirectTo: '' },
  {path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
