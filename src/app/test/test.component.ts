import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //2.准备数据
  homeTitle="homeTitle";

  myString="sb czhen";

  person={
    name:"czhen",
    color:"red"
  };
  constructor() { }

  ngOnInit() {
  }

}
