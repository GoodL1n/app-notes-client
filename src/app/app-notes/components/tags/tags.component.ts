import { Component, OnInit } from '@angular/core';
import { Tag } from '../../models/tag.model';
import { StorageDataService } from '../../services/storage-data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = []
  isNewTagOpen: boolean = false

  constructor(private storgeService: StorageDataService) { }

  ngOnInit(): void {
    this.tags = this.storgeService.getTags()
  }
}
