import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-project',
  templateUrl: './reactive-project.component.html',
  styleUrls: ['./reactive-project.component.css']
})
export class ReactiveProjectComponent implements OnInit {
  notAllowedNames = ['Test']
  myReactForm : FormGroup;
  Submitted: boolean;
    constructor( ) {
      this.createForm();
     }
  
    ngOnInit() {
    }
    createForm(){
  // this.myReactForm = this._fb.group({
  //   pname:['', Validators.required, this.NaNames.bind(this)],
  //   mail: ['', Validators.required, Validators.email],
  //   projectstatus: ['Finished']
  // })

  this.myReactForm = new FormGroup({
       'pname': new FormControl('',[Validators.required, this.NaNames.bind(this)]),
         'mail': new FormControl('',[Validators.required, Validators.email], this.NaEmails),
         'projectstatus': new FormControl('Finished')
    })
  }
  
    OnSubmit(){
      this.Submitted = true;
      console.log(this.myReactForm.value);
      
    }
    NaNames(control: FormControl){
      if(this.notAllowedNames.indexOf(control.value) !== -1) {
        return {'namesNotAllowed': true}
      }
      return null;
    }
    NaEmails(control:FormControl): Promise<any> | Observable<any> {
      const myResponse = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'test@gmail.com'){
            resolve({'emailNotAllowed': true})
          } else {
            resolve(null)
          }
        }, 1000);
      })
      return myResponse;
    }

}
