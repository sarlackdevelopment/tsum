import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      FIO: new FormControl('', 
        [
          Validators.required, 
          Validators.pattern('^(?! )(?!.* $)[а-яА-ЯёЁ -]+$')
        ])
    })
  }

  submit() {
    //console.log(this.ghj)
  }
}