import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Photo } from '../album.component';

interface DialogData {
  title: string;
  photos: Photo[];
}

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  index = 0;

  constructor(
    public dialogRef: MatDialogRef<AlbumPhotosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  get first() {
    return this.index === 0;
  }

  get last() {
    return this.index === this.data.photos.length - 1;
  }

  next() {
    this.index++;
  }

  prev() {
    this.index--;
  }
}
