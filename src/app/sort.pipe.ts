import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], value: string, subValue:string): any[] {
  

    if(!value){
      return items.slice().sort(function(
        a:any,b:any
        ):any{
        return a > b ? 1 : -1
      });
    }
    else if(value && !subValue){

      return items.slice().sort(function(
        a:any,b:any
        ):any{
        return a[value] > b[value] ? 1 : -1
      });
    }
    else{
      return items.slice().sort(function(
        a:any,b:any
        ):any{
        return a[value][subValue] > b[value][subValue] ? 1 : -1
      });
    }

}}
