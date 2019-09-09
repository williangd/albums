import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get(this.apiUrl + 'albums');
  }

  getPhotos(albumId: number) {
    return this.http.get(`${this.apiUrl}photos?albumId=${albumId}&_limit=10`);
  }
}
