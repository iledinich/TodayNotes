import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Note } from '../_models/note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../_services/note.service';
import { AlertifyService } from '../_services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  @ViewChild('editForm') editForm: NgForm;
  note: Note;
  constructor(private route: ActivatedRoute, private router: Router,
     private noteService: NoteService, private alertify: AlertifyService) { }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.note = data['note'];
    });
  }

  updateNote() {
    this.noteService.updateNote(this.note.id, this.note).subscribe(next => {
      this.router.navigate(['/home']);
      this.alertify.success('Note updated successfully');
      this.editForm.reset(this.note);
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {

  }

}
