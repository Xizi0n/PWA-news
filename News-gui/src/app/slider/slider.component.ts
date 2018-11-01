import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-service.service';
import { News } from '../news.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images = [];
  selectedImage;

  constructor(private newsService: NewsService) { }


  ngOnInit() {
    console.log('ngOninit');
    this.newsService.getHeadlineImages()
      .then( data => {
        console.log('Data from PROMISE: ' +  data);
        this.images = data;
        this.selectedImage = this.images[0];
        console.log('slectedimage: ' + this.selectedImage);
      }).catch( err => {
        console.log(err);
      });
  }

}
