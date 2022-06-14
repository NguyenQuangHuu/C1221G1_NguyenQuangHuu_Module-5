import { Component, OnInit } from '@angular/core';
import {DictionaryService} from './dictionary.service';
import {IWord} from './i-word';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  library: IWord[] = [];
  constructor(private service: DictionaryService) {
    this.library = this.service.getAll();
  }
  ngOnInit(): void {
  }

}
