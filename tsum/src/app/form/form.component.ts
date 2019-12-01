import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({})
  }
}