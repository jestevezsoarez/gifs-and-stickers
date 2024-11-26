import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
