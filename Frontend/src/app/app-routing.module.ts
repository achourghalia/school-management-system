import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ParentPortalComponent } from './parent-portal/parent-portal.component';
import { userComponent } from './user/user.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'parent-portal', component: ParentPortalComponent },
  { path: 'news', component: NewsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'parent-portal', component: ParentPortalComponent },

  { path: 'user', component: userComponent },
  { path: 'parent-portal', component: ParentPortalComponent },
  { path: 'parent-portal', component: ParentPortalComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
