import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  form: FormGroup
  toggleFamily = false

  ngOnInit() {
    this.form = new FormGroup({
      FIO: new FormControl('', 
        [
          Validators.required, 
          Validators.pattern('^(?! )(?!.* $)[а-яА-ЯёЁ -]+$')
        ]),
      birthDate: new FormControl('', Validators.required)
    })
  }

  changeBirthDate(event?: any) {
    
    let now      = new Date()
    let userDate = event.target.value.split('-')[0]
    let thatYear = now.getFullYear()

    this.toggleFamily = thatYear - userDate >= 18

  }

  submit() {
    //console.log(this.ghj)
  }
}