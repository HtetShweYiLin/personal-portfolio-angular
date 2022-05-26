import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
