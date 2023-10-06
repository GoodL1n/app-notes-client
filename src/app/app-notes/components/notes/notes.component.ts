import { Component } from '@angular/core';
import { Note } from '../../models/note.model';
import { StorageDataService } from '../../services/storage-data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: Note[] = []
  isNewNoteOpen: boolean = false;

  constructor(private storageService: StorageDataService){}

  ngOnInit(): void {
    this.notes = this.storageService.getNotes()
  }
}
