import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsService } from './albums/albums.service';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { AlbumPhotosComponent } from './albums/album/album-photos/album-photos.component';

@NgModule({
  declarations: [AppComponent, AlbumsComponent, AlbumComponent, AlbumPhotosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [AlbumPhotosComponent],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
