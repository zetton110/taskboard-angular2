import { Component,OnDestroy } from '@angular/core';
import { NoteCard,NoteCreator } from '../ui';
import { NoteService } from '../services';
import { Store } from '../store';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import 'rxjs/Rx';

@Component({
    selector: 'notes-container',
    directives: [
        NoteCard,
        NoteCreator,
        Dragula
    ],
    viewProviders: [DragulaService],
    styles:[`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px; 
    }
    `],
   template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <div class='container' [dragula]='"first-bag"'>
            <note-card
              class="col-xs-4"
              [note]="note"
              *ngFor="let note of notes;let i = index"
              (checked)="onNoteChecked($event,i)"
            >
            </note-card>
          </div>
        </div>
      </div>
    </div>
    `,
})
export class Notes implements OnDestroy {

  constructor(private noteService:NoteService,private store:Store){
    this.store.changes.pluck('notes')
    .subscribe((notes:any) => this.notes = notes);

    this.noteService.getNote()
    .subscribe();
  }

    ngOnDestroy(){
      console.log('destroyed');
    }

    notes = []
    onNoteChecked(note,i){
        this.noteService.completeNote(note)
        .subscribe()
    }
    onCreateNote(note){
      this.noteService.createNote(note)
      .subscribe();
    }


}