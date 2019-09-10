import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  baseUrl = 'https://api.twitter.com/1.1/search/tweets.json';
  query = '?q=trend&result_type=popular&lang=it';
  authentication = 'OAuth oauth_consumer_key=\"lmE6PKfXQ41zCRE3NqHxcLe1G\",oauth_token=\"283522188-5qbx8ii18xs7GE1nfXqFBUfKGOx166cw1hcOpWUT\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1568107052\",oauth_nonce=\"A4ML0RQ8X4y\",oauth_version=\"1.0\",oauth_signature=\"RuAYgc5Y4ErjpQFjFg8Ce8gxLq4%3D\"';
  trendingTopics: string[];
  
  constructor(
    private http: HttpClient
  ){
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': JSON.stringify(this.authentication)
    });

    this.http.get(this.baseUrl + this.query, { headers: httpHeaders })
      .subscribe((res: any) => {
        console.log(res);
      },  
      error => {
        console.log('HTTP ERROR', error);
      },
      () => {
        console.log('finished')
      }
    );
  }
  
}
