import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  notes: Note[] = []
  isNewNoteOpen: boolean = false;

  constructor(private storageService: StorageDataService){}

  ngOnInit(): void {
    this.notes = this.storageService.getNotes()
  }

}
