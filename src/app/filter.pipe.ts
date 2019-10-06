import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ss: any,val: any): any {
    if(val===undefined){
        return ss;
    }
    return ss.filter(function(ss){
        return ss.name.toLowerCase().includes(val.toLowerCase());
    });
  }

}
