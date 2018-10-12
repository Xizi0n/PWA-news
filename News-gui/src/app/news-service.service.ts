import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';

@Injectable()
export class NewsService {

  baseUrl = 'https://newsapi.org/v2/';
  test = 'top-headlines?country=us&category=business';
  apikey = '&apiKey=ad88b53345fc4d81841c61e9db0ad5ce';
  testUrl = this.baseUrl + this.test + this.apikey;

  constructor(private http: HttpClient) {}

  result: News[] = [];


  getNews(): News[] {
    const myNews: News[] = [];
    this.http.get(this.testUrl)
      .subscribe( data => {
        data.articles.forEach(element => {
          const temp = new News(element.author, element.title, element.description,
                          element.content, element.publishedAt, element.source,
                          element.url, element.urlToImage);
        this.result.push(temp);

        });
        console.log(this.result);
      });
    return myNews;
  }

}
