import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialsComponent } from './views/credentials/credentials.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WrittingviewComponent } from './views/writtingview/writtingview.component';

const routes: Routes = [
  {path: '', component: CredentialsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'writting', component: WrittingviewComponent},
  {path: '', pathMatch: 'full', redirectTo: '' },
  {path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
