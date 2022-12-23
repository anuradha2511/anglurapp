import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(val: any, searchTearm): any {
    return val.filter(function(search) {
return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }

}
