import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custcount'
})
export class CustcountPipe implements PipeTransform {

  transform(value: any): any {
    return value.toString().length;
  }

}
