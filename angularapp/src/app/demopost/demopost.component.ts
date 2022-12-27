import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

arrPosts: Post[] = [];

  constructor(private _postServics: PostService) { }

  ngOnInit() {
    this._postServics.getPosts().subscribe(res =>{
      console.log('jsonplaceholder',res);
      this.arrPosts = res;
    })
  }

}
