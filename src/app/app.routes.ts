import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path:'project', component:ProjectsComponent},
    {path:'skills', component:SkillsComponent},
    {path:'contact', component:ContactComponent}
];