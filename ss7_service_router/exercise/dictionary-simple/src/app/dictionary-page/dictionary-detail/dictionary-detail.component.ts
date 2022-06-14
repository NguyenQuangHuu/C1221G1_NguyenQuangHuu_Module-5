import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../dictionary.service';
import {IWord} from '../i-word';

@Component({
  selector: 'app-dictionnary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const char = paramMap.get('word');
      this.word = service.dictionary.filter( (word) => word.word === char);
      // for(let c of service.dictionary){
      //   if(c.word === char){
      //     this.word = c;
      //   }
      // }
    });
  }

  ngOnInit(): void {
  }

}
