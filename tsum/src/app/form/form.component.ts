import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  form: FormGroup
  toggleFamily = false
  male = true
  countOfChilds = 0
  areYouKidding = false
  counterTry = 0
  disabled=false

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      FIO: new FormControl('', 
        [
          Validators.required, 
          Validators.pattern('^(?! )(?!.* $)[а-яА-ЯёЁ -]+$')
        ]),
      birthDate: new FormControl('', Validators.required),
      email: new FormControl('', 
        [
          Validators.required,
          Validators.email
        ])
    })
  }

  changeBirthDate(event?: any) {
    
    let now      = new Date()
    let userDate = event.target.value.split('-')[0]
    let thatYear = now.getFullYear()

    this.toggleFamily = thatYear - userDate >= 18

  }

  childs(operation) {
    switch (operation) {
      case 'decrease':
        if (this.countOfChilds != 0) {
          this.countOfChilds--
        }
        break
      case 'increase':
        if (this.countOfChilds > 14) {
          this.areYouKidding = true
        }
        this.countOfChilds++
        break
    }
  }

  submit() {

    if (!this.form.invalid) {
      this.router.navigate(['/resume'])      
    } else {
      this.disabled = true
      setTimeout(() => this.disabled = false, 3000)
      if (this.counterTry > 2) {
        this.form.reset()
        this.counterTry = 0
      }
      this.counterTry++
    }
    
  }
}