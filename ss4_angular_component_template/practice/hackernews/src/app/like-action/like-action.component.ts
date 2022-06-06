import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-action',
  templateUrl: './like-action.component.html',
  styleUrls: ['./like-action.component.css']
})
export class LikeActionComponent implements OnInit {
  like = 0;
  constructor() { }

  ngOnInit(): void {
  }

  likeIncrease() {
    this.like++;
  }
}
