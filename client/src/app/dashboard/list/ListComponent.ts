import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.html'
})

export class ListComponent implements OnInit {
  public postList = postList;
  constructor() {
  }
  ngOnInit(): void {
  }
}

const postList = [
  {
    title: "Some title1",
    subTitle: "Some subtitle1",
    imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n" +
      "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n" +
      "bred for hunting.",
  },
  {
    title: "Some title2",
    subTitle: "Some subtitle2",
    imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n" +
      "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n" +
      "bred for hunting.",
  },
  {
    title: "Some title3",
    subTitle: "Some subtitle3",
    imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n" +
      "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n" +
      "bred for hunting.",
  },
  {
    title: "Some title4",
    subTitle: "Some subtitle4",
    imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n" +
      "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n" +
      "bred for hunting.",
  }
];
