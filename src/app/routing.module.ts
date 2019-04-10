import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes : Routes = [
  {path: "*", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "resume", component: ResumeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "contact", component: ContactComponent}
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
