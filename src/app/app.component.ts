import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResult: string = '';

  getSearch(terms: string) {
    this.searchResult = terms;
    console.log('searchResults:', terms);

  }
}
