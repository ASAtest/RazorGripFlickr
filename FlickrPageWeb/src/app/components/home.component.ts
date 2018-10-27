import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

feedList: Object[][] = [];
loading: boolean;
currImg: Object;
index = 0;
interval: any;

  constructor(private _flickrService: FlickrService) {
   }

  ngOnInit() {
    this.initializeList();
  }

  initializeList() {
   this.loading = true;
   this._flickrService.getFeed().subscribe(res => {
     this.feedList.push(res.items);
   });
   const tmpInterval = setInterval(() => {
    if (this.feedList.length > 0) {
     clearInterval(tmpInterval);
      this.currImg = this.feedList[0][this.index];
      this.autoRefresh();
      this.loading = false;
    }
    }, 500);
  }

  autoRefresh() {
    this.interval = setInterval(() => {
    this.getImg();
   }, 5000);
  }

  getImg() {
   if (this.index < this.feedList[0].length) {
      this.currImg = this.feedList[0][this.index++];
      console.log(this.index);
     }else {
      clearInterval(this.interval);
     this.feedList = [];
      this.index = 0;
      this.initializeList();
   }
  }

  refreshImg() {
    clearInterval(this.interval);
    this.getImg();
    this.autoRefresh();
  }

}
