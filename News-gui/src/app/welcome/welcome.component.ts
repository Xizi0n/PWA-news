import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-service.service';
import { News } from '../news.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.welcome = this.newsService.getNews();
  }

}
