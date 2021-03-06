import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FileUploadModule } from 'ng2-file-upload';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';

import { MainComponent } from './components/main/main.component';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryListComponent } from './components/categorylist/category-list.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUpdateComponent } from './components/addupdate/addupdate.component';
import { HomeComponent } from './components/home/home.component';
import { AnnotationComponent } from './components/annotation/annotation.component';
import { CategoryComponent } from './components/category/category.component';
import { DetailComponent } from './components/detail/detail.component';
import { MyHeritagesComponent } from './components/myheritages/myheritages.component';
import { SearchComponent } from './components/search/search.component';

import { AuthGuard } from './guards/auth.guard';

import { CategoryFilterPipe } from './pipes/categoryfilter.pipe';

import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { MapsService } from './services/maps.service';
import { ChoService } from './services/cho.service';
import { AnnotationService } from './services/annotation.service';
import { AnnotationResolverService } from './services/annotation.resolver.service';

import 'zonejs';
import 'shim';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    Ng2CloudinaryModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'categories',
        component: CategoryListComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: "addupdate",
        component: AddUpdateComponent,
        canActivate: [AuthGuard]
      },
      {
        path:"myheritages",
        component: MyHeritagesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          annotations: AnnotationResolverService
        }
      },
      {
        path: "category",
        component: CategoryComponent
      },
      {
        path: 'heritage',
        component: DetailComponent
      },
      {
        path: "search",
        component: SearchComponent
      }
    ])
  ],
  declarations: [
    MainComponent,
    AlertComponent,
    CategoryListComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AddUpdateComponent,
    CategoryFilterPipe,
    AnnotationComponent,
    HomeComponent,
    CategoryComponent,
    DetailComponent,
    MyHeritagesComponent,
    SearchComponent
  ],
  bootstrap: [MainComponent],
  providers: [
    AlertService,
    UserService,
    AuthGuard,
    MapsService,
    ChoService,
    AnnotationService,
    AnnotationResolverService
  ]

})
export class HerodotAppModule { }

