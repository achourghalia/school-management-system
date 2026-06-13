import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { ParentPortalComponent } from './parent-portal/parent-portal.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { userComponent } from './user/user.component';
import { NewpassComponent } from './newpass/newpass.component';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    EducationComponent,
    ParentPortalComponent,
    RegisterComponent,
    NewsComponent,
    ProfileComponent,
    userComponent,
    NewpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule



  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
