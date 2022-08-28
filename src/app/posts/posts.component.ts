import { Component, OnInit } from '@angular/core';
import { Post, PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
      this.postService.getPost().subscribe(resp => this.posts = resp)
  }

}
