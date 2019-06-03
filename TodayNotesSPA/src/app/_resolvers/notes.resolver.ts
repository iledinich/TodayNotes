import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { NoteService } from '../_services/note.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from '../_models/note';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class NotesResolver implements Resolve<Note[]> {
    constructor(private noteService: NoteService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Note[]> {
        return this.noteService.getNotes(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
