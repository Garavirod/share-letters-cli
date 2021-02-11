import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CredentialsComponent } from './views/credentials/credentials.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WrittingviewComponent } from './views/writtingview/writtingview.component';
import { ValoracionComponent } from './components/valoracion/valoracion.component';
import { EditorComponent } from './components/editor/editor.component';
// Imported Syncfusion RichTextEditorModule from Rich Text Editor package
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CredentialsComponent,
    NavbarComponent,
    ProfileComponent,
    WrittingviewComponent,
    ValoracionComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
