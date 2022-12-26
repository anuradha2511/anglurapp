import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(val: any, searchTearm): any {
    return val.filter(function(search) {
return search.price.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }

}
