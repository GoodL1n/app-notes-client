import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { StorageDataService } from '../../services/storage-data.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit{
  notes: Note[] = []

  constructor(private storageService: StorageDataService){}

  ngOnInit(): void {
    this.notes = this.storageService.getNotesWithReminder()
  }
}
