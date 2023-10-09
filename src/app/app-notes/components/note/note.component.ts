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
    this.tags = this.storageService.getTags()
  }

  editOpen() {
    console.log(this.note)
    this.formEditNote = this.createForm();
    this.isNoteSelect = true
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: this.note.title,
      content: this.note.content,
      tags: [this.note.tags],
      date: this.note.reminder ? this.note.reminder.time.toISOString().slice(0, 16) : ''
    })
  }

  compareTag(tag1: Tag, tag2: Tag): boolean {
    return tag1 && tag2 ? tag1.name === tag2.name : tag1 === tag2;
  }

  submit() {
    this.note = {
      title: this.formEditNote.value.title,
      content: this.formEditNote.value.content,
      tags: this.formEditNote.value.tags,
      reminder: this.formEditNote.value.date ? { time: new Date(this.formEditNote.value.date) } : undefined
    }
    this.isNoteSelect = false;
  }

  deleteNote(){
    this.storageService.deleteNote(this.index)
  }
}
