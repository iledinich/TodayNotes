import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../_models/note';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

  getNotes(userId: number): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl + 'notes/notes/' + userId);
  }

  getNote(noteId: number): Observable<Note> {
    return this.http.get<Note>(this.baseUrl + 'notes/note/' + noteId);
  }

}
