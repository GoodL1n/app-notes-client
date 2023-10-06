import { Component, Input } from '@angular/core';
import { Tag } from '../../models/tag.model';
import { StorageDataService } from '../../services/storage-data.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() tag!: Tag
  @Input() index!: number

  isOpportuniteToDelete: boolean = false;

  constructor(private storageService: StorageDataService){}

  deleteTag(){
    this.storageService.deleteTag(this.index)
  }
}
