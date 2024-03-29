import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IntroComponent } from './components/intro/intro.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ResumeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    SkillsComponent,
    IntroComponent,
    HeaderBarComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
