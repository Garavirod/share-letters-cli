import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { ReadingviewComponent } from './views/readingview/readingview.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { HistoriasComponent } from './components/historias/historias.component';
import { BusquedaviewComponent } from './views/busquedaview/busquedaview.component';
import { EscritorviewComponent } from './views/escritorview/escritorview.component';
import { AsignvalueComponent } from './components/asignvalue/asignvalue.component';
import { NoresultsComponent } from './views/noresults/noresults.component';

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
    EditorComponent,
    ReadingviewComponent,
    ComentariosComponent,
    HistoriasComponent,
    BusquedaviewComponent,
    EscritorviewComponent,
    AsignvalueComponent,
    NoresultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
