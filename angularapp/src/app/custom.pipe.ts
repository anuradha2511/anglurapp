import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // text1 = "Mr. ";
  // text2 = "Mrs. ";

  transform(name: string, gender: string): string {

    if (gender.toLocaleLowerCase()== "male")
    return "Mr. " + name;
    else
    return "Mrs. " + name;
  }
  
    // if (gender == 'Male')
    //   return this.text1 + name;
    // else {
    //   return this.text2 + name;
    // }
    
}
