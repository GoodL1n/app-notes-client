import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventType } from '@angular/router';
import { StorageDataService } from '../../services/storage-data.service';
import { NotificationService } from '../../services/notification.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css']
})
export class NewTagComponent implements OnInit{
  @Output() isNewTagOpen = new EventEmitter<boolean>()

  formNewTag!: FormGroup

  constructor(private storageService: StorageDataService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formNewTag = this.createForm()
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  submit(){
    this.storageService.setTag(this.formNewTag.value)
    this.isNewTagOpen.emit()
  }
}
