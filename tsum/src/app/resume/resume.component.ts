import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  //params = []

  FIO           = "" 
  Family        = "" 
  Male          = ""
  BirthDate     = ""
  CountOfChilds = ""
  Email         = ""
  Comment       = ""

  constructor(private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {

      // this.params = Object.values(params)

      this.FIO           = params.FIO
      this.Family        = params.Family
      this.Male          = params.Male
      this.BirthDate     = params.BirthDate
      this.CountOfChilds = params.CountOfChilds
      this.Email         = params.Email
      this.Comment       = params.Comment
    })
  }

}