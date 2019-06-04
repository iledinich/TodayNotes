import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchedWordEmitter = new EventEmitter();
  constructor() { }
  searchWord: string;
  ngOnInit() {
  }

  search(newValue) {
    this.searchWord = newValue;
    this.searchedWordEmitter.emit(newValue);
  }

}
