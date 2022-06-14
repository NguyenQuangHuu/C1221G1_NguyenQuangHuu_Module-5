import { Injectable } from '@angular/core';
import {IWord} from './i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: IWord[] = [];
  constructor() {
    this.dictionary.push({word: 'book', mean: 'sách'});
    this.dictionary.push({word: 'tree', mean: 'cây'});
    this.dictionary.push({word: 'chicken', mean: 'gà'});
    this.dictionary.push({word: 'map', mean: 'bản đồ'});
    this.dictionary.push({word: 'cat', mean: 'mèo'});
    this.dictionary.push({word: 'dog', mean: 'chó'});
    this.dictionary.push({word: 'fish', mean: 'cá'});
    this.dictionary.push({word: 'love', mean: 'chịch'});
  }

  getAll(): IWord[] {
    return this.dictionary;
  }
}
