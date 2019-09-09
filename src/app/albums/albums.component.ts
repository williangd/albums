import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((data: Album[]) => (this.albums = data));
  }
}
