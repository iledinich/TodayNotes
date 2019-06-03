import { Component, OnInit } from '@angular/core';
import { NoteService } from '../_services/note.service';
import { Note } from '../_models/note';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notes: Note[];

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.notes = data['notes'];
    });
  }
  constructor(private noteService: NoteService, private alertify: AlertifyService,
    private route: ActivatedRoute) {
  }

}
