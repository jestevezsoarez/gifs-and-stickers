import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'uwiy2NxdVdsk3m5DGWgvUCIXNKxVCBf3';

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

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;

    tag = tag.toLowerCase();
    this.organizeHistory(tag);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=uwiy2NxdVdsk3m5DGWgvUCIXNKxVCBf3&q=star trek&limit=10')
      .then(res => res.json())
      .then(data => console.log(data))

    this._tagsHistory.unshift(tag);
  }

}
