import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { StorageDataService } from '../../services/storage-data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  isSetReminder: boolean = false;
  formEditNote!: FormGroup;

  constructor(private storageService: StorageDataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tags = this.storageService.getTags()
  }

  editOpen() {
    this.formEditNote = this.createForm();
    this.isNoteSelect = true
  }

  createForm(): FormGroup {
    if (this.note.reminder) {
      this.isSetReminder = true
      return this.formBuilder.group({
        title: this.note.title,
        content: this.note.content,
        tags: [this.note.tags],
        date: this.note.reminder.time.toISOString().slice(0, 16)
      })
    } else {
      return this.formBuilder.group({
        title: this.note.title,
        content: this.note.content,
        tags: [this.note.tags],
      })
    }
  }

  setReminder(){
    this.formEditNote.addControl('date', new FormControl(''))
    this.isSetReminder = true
  }

  compareTag(tag1: Tag, tag2: Tag): boolean {
    return tag1 && tag2 ? tag1.name === tag2.name : tag1 === tag2;
  }

  submit() {
    const newNote = {
      title: this.formEditNote.value.title,
      content: this.formEditNote.value.content,
      tags: this.formEditNote.value.tags,
      reminder: this.formEditNote.value.date ? { time: new Date(this.formEditNote.value.date) } : undefined
    }
    this.storageService.updateNote(this.index, newNote)
    this.isNoteSelect = false;
    this.isSetReminder = false;
  }

  deleteReminder() {
    this.formEditNote.value.date = ''
    this.isSetReminder = false
  }

  deleteNote() {
    this.storageService.deleteNote(this.index)
  }
}
