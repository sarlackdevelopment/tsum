import { NgModule}  from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormComponent } from './form/form.component'
import { ResumeComponent } from './resume/resume.component'

// http://localhost:4200/ -> FormComponent
// http://localhost:4200/resume -> ResumeComponent

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'resume', component: ResumeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}