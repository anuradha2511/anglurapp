import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  //  m= "Mr. ";
  // fm = "Mrs. ";

  transform(name: string, gender: string): string {

    if (gender.toLowerCase() == "male")  
    return "Mr. " + name;
    else
    return "Mrs. " + name;
  }

    // if (gender == 'Male')
    //   return this.m + name;
    // else {
    //   return this.fm + name;
    // }
    
}
