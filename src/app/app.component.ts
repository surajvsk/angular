import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'KodingNotesApp';
  posts:any;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
          console.log(response)
        });
  }
}
