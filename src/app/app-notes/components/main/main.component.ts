import { Component, OnInit } from '@angular/core';
import { StorageDataService } from '../../services/storage-data.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  notes: Note[] = []

  constructor(private storageService: StorageDataService){}

  ngOnInit(): void {
    this.notes = this.storageService.getNotes()
  }

}
