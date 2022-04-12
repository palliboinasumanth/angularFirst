import { Component } from '@angular/core';
import {PostDataService} from "./post-data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  allData:any=[];
  constructor(private post:PostDataService){
    this.post.getPostData().subscribe(data=>{
      console.log(data);
      this.allData=data;
    });
  }
}
