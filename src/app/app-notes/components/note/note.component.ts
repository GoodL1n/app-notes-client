import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { StorageDataService } from '../../services/storage-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;
  @Input() index!: number

  tags: Tag[] = []

  isNoteSelect: boolean = false;
  formEditNote!: FormGroup;

  constructor(private storageService: StorageDataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formEditNote = this.createForm();
    this.tags = this.storageService.getTags()
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: this.note.title,
      content: this.note.content,
      tags: this.formBuilder.array(this.note.tags ?  this.note.tags : [])
    })
  }

  submit() {
    this.note = this.formEditNote.value
    this.isNoteSelect = false;
  }
}
