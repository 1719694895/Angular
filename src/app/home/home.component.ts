import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {LoggingService} from '../logging.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
 
  @Input() person;
 
  @Output() onYell=new EventEmitter();
  constructor(private logger:LoggingService) { }

  ngOnInit() {
  }
  logIt(){
    this.logger.log();
  }
  btn(){
    this.onYell.emit();
  }
}
