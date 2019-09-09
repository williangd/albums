import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../albums.component';
import { AlbumsService } from '../albums.service';
import { MatDialog } from '@angular/material/dialog';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;
  photos: Photo[] = [];

  constructor(private albumsService: AlbumsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.albumsService.getPhotos(this.album.id).subscribe((data: Photo[]) => (this.photos = data));
  }

  onClick() {
    this.dialog.open(AlbumPhotosComponent, {
      width: '600px',
      data: { title: this.album.title, photos: this.photos }
    });
  }
}
