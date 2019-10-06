import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp cz';

  person={
    name:"czhen",
    color:"red"
  };
  yell(){
    alert("哪些年的梦");
  }
}
