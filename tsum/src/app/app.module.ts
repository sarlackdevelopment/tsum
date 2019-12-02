import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'
import { ResumeComponent } from './resume/resume.component'
import { FIOComponent } from './form/FIO/FIO.component'
import { GenderComponent } from './form/gender/gender.component'
import { BirthDateComponent } from './form/birthDate/birthDate.component'
import { FamilyComponent } from './form/family/family.component'
import { QuantityChildrenComponent } from './form/quantityChildren/quantityChildren.component'
import { EmailComponent } from './form/email/email.component'
import { CommentComponent } from './form/comment/comment.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResumeComponent,
    FIOComponent,
    GenderComponent,
    BirthDateComponent,
    FamilyComponent,
    QuantityChildrenComponent,
    EmailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
