import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() itemSearch = new EventEmitter<string>();
  mySearch: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch(search: string) {
    this.itemSearch.emit(search);
    console.log('mySearch emitted: ', search);

  }

}
