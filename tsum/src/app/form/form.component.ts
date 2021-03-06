import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // data variables
  FIO           = ""
  Family        = "Выбор..."
  Male          = true
  BirthDate     = null
  CountOfChilds = 0
  Email         = ""
  Comment       = ""

  // service variables
  form: FormGroup
  toggleFamily  = false
  counterTry    = 0
  disabled      = false

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
    
    this.BirthDate = event.target.value

    let now      = new Date()
    let userDate = event.target.value.split('-')[0]
    let thatYear = now.getFullYear()

    if (thatYear - userDate >= 18) {
      this.toggleFamily = true
    } else {
      this.toggleFamily = false
      this.Family       = "Выбор..."
    } 

  }

  childs(operation) {
    switch (operation) {
      case 'decrease':
        if (this.CountOfChilds != 0) {
          this.CountOfChilds--
        }
        break
      case 'increase':
        this.CountOfChilds++
        break
    }
  }

  changeFIO(event?: any) {
    this.FIO = event.target.value
  }

  changeFamily(event?: any) {
    this.Family = event.target.value
  }

  changeEmail(event?: any) {
    this.Email = event.target.value
  }

  changeComment(event?: any) {
    this.Comment = event.target.value
  }

  submit() {

    if (!this.form.invalid) {
      
      let data = { 
        FIO: this.FIO, 
        Family: this.Family,
        Male: this.Male,
        BirthDate: this.BirthDate,
        CountOfChilds: this.CountOfChilds,
        Email: this.Email,
        Comment: this.Comment
      }
      
      this.router.navigate(['/resume'], { queryParams: data })   
    } else {
      this.disabled = true
      setTimeout(() => this.disabled = false, 10000)
      if (this.counterTry > 2) {
        this.form.reset()
        this.counterTry = 0
      }
      this.counterTry++
    }
    
  }
}