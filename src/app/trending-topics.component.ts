import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-trending-topics',
  template: `{{trendingTopics | json}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TrendingTopicsComponent implements DoCheck {
  @Input() trendingTopics: string[];

  ngDoCheck() {
  }

}