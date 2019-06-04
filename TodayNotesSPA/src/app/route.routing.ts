import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './_guards/auth.guard';
import { NotesResolver } from './_resolvers/notes.resolver';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NoteEditResolver } from './_resolvers/edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate : [AuthGuard], resolve: {notes: NotesResolver}  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'edit/:id', component: EditNoteComponent, canDeactivate: [PreventUnsavedChanges], resolve: {note: NoteEditResolver}},
  { path: 'new', component: EditNoteComponent, canDeactivate: [PreventUnsavedChanges]},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
