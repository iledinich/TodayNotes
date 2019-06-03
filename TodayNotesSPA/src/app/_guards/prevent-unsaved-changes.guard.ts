import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<EditNoteComponent> {
    canDeactivate(component: EditNoteComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue?  Any unsaved changes will be lost');
        }
        return true;
    }
}
