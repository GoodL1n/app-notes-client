import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageDataService } from '../../services/storage-data.service';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  @Output() isNewNoteOpen = new EventEmitter<boolean>()

  tags: Tag[] = []

  formNewNote!: FormGroup

  isSetReminder: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private storageService: StorageDataService) { }

  ngOnInit(): void {
    this.formNewNote = this.createForm()
    this.tags = this.storageService.getTags()
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['']
    })
  }

  setReminder(){
    this.formNewNote.addControl('date', new FormControl(''))
    this.isSetReminder = true
  }

  deleteReminder() {
    this.formNewNote.value.date = ''
    this.isSetReminder = false
  }

  submit(): void {
    this.storageService.setNote({
      title: this.formNewNote.value.title,
      content: this.formNewNote.value.content,
      tags: this.formNewNote.value.tags,
      reminder: this.formNewNote.value.date ? { time: new Date(this.formNewNote.value.date) } : undefined
    })
    this.isNewNoteOpen.emit()
  }
}