import { Component, OnInit } from '@angular/core';
import { Album, AlbumService } from './service/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {


  albums: Album[]= [];

  constructor(private service:AlbumService) { }

  ngOnInit(): void {
    this.service.getAlbums().subscribe(response => this.albums = response);
  }

}
