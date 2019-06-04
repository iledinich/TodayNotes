import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Note } from '../_models/note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../_services/note.service';
import { AlertifyService } from '../_services/alertify.service';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  note: Note;
  newMode = false;
  colorHasChanged = false;
  defaultColor = environment.colors[0];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
    private alertify: AlertifyService
  ) {}

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data['note'] === undefined) {
        this.note = { id: 0, title: '', text: '', daysAgo: 0, color: this.defaultColor };
        this.newMode = true;
      } else {
        this.note = data['note'];
      }
    });
  }

  addOrUpdateNote() {

    if (this.newMode) {
      this.noteService.addNote(this.note).subscribe(
        next => {
          this.router.navigate(['/home']);
          this.alertify.success('Note created successfully');
          this.editForm.reset(this.note);
          this.colorHasChanged = false;
        },
        error => {
          this.alertify.error(error);
        }
      );
    } else {
      this.noteService.updateNote(this.note.id, this.note).subscribe(
        next => {
          this.router.navigate(['/home']);
          this.alertify.success('Note updated successfully');
          this.editForm.reset(this.note);
          this.colorHasChanged = false;
        },
        error => {
          this.alertify.error(error);
        }
      );
    }

  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id).subscribe(
      next => {
        this.router.navigate(['/home']);
        this.alertify.success('Note deleted successfully');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  changeColorNote(newColor: string) {
    this.note.color = newColor;
    this.colorHasChanged = true;
  }
}
