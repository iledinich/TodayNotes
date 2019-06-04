import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route.routing';
import { AuthGuard } from './_guards/auth.guard';
import { NoteCardComponent } from './note-card/note-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NotesResolver } from './_resolvers/notes.resolver';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NoteEditResolver } from './_resolvers/edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { AddButtonComponent } from './add-button/add-button.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';


export function tokenGetter() {
   return localStorage.getItem('token');
 }

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      RegisterComponent,
      WelcomeComponent,
      SigninComponent,
      NoteCardComponent,
      ColorPickerComponent,
      EditNoteComponent,
      AddButtonComponent,
      TimeAgoPipe,
      SearchBarComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
           tokenGetter: tokenGetter,
           whitelistedDomains: ['localhost:5000'],
           blacklistedRoutes: ['localhost:5000/api/auth']
         }
       }),
       BsDropdownModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      PreventUnsavedChanges,
      NotesResolver,
      NoteEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
