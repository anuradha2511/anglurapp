import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true // pure:false- inpure pipe | pure: true - purepipe
})
export class FilterPipe implements PipeTransform {

  transform(val: any, searchTearm): any {
    return val.filter(function(search) {
return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }

}
