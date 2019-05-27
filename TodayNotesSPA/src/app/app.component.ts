import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodayNotesSPA';
  notes: any;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/api/values').subscribe(resp => {
      this.notes = resp;
      console.log(this.notes);
    });
  }
}
