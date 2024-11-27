import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) { 
    if (this._tagsHistory.includes(tag)) { 
      this._tagsHistory = this._tagsHistory.filter((elem) => elem !== tag);
    }

    this._tagsHistory = this._tagsHistory.splice(0, 9);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;

    tag = tag.toLowerCase();
    this.organizeHistory(tag);

    this._tagsHistory.unshift(tag);
  }

}
