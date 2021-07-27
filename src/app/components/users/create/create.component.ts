import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  Form: any = FormGroup;
  submited: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      first: [null, [Validators.required, Validators.minLength(4)]],
      last: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(4)]],
    });

    
  }

  submit(){ 
    this.submited = true;
    console.log(this.Form.value);
  }

}
