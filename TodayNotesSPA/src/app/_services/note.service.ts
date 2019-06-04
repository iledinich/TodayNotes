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

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl + 'notes');
  }

  getNote(noteId: number): Observable<Note> {
    return this.http.get<Note>(this.baseUrl + 'notes/note/' + noteId);
  }

  updateNote(noteId: number, note: Note) {
    return this.http.put<Note>(this.baseUrl + 'notes/' + noteId, note);
  }

  addNote(note: Note) {
    return this.http.post((this.baseUrl + 'notes/'), note);
  }

  deleteNote(noteId: number) {
    return this.http.delete<Note>(this.baseUrl + 'notes/' + noteId);
  }

}
