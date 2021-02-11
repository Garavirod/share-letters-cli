import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaviewComponent } from './views/busquedaview/busquedaview.component';
import { CredentialsComponent } from './views/credentials/credentials.component';
import { EscritorviewComponent } from './views/escritorview/escritorview.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ReadingviewComponent } from './views/readingview/readingview.component';
import { WrittingviewComponent } from './views/writtingview/writtingview.component';

const routes: Routes = [
  {path: '', component: CredentialsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'writting', component: WrittingviewComponent},
  {path: 'reading/:id', component: ReadingviewComponent},
  {path: 'busqueda', component: BusquedaviewComponent},
  {path: 'escritor/:id', component: EscritorviewComponent},
  {path: '', pathMatch: 'full', redirectTo: '' },
  {path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
