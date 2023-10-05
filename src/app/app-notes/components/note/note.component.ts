import { Component, Input } from '@angular/core';
import { Note } from '../../models/note.model';
import { StorageDataService } from '../../services/storage-data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input() note!: Note

  constructor(private storageService: StorageDataService) { }
}
