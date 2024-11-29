import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'uwiy2NxdVdsk3m5DGWgvUCIXNKxVCBf3';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public limit: string = '10';
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {}

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

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag )
      .set('limit', this.limit)

    // Returns an observable
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {
        this.gifList = resp.data;       
        console.log(this.gifList);
      });

    this._tagsHistory.unshift(tag);
    
  }

}
