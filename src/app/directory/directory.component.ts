import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../logging.service';

import { from } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {

    data='123asdQWE';
    data2='111sASdf';
    data3='789';
    ss=[];
    classes={'red': this.data==''};
  person2:String;
  constructor(private route:ActivatedRoute,private logger:LoggingService,private person:DataService) { 
    this.person2=route.snapshot.params['person2'];
  }

  ngOnInit() {
    this.person.getData().subscribe(
      (data)=>this.ss=data
    );
  }
  logIt(){
   this.logger.log();
  }
}
