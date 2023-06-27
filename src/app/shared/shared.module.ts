import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import { CommentsComponent } from './components/comments/comments.component';
import {MaterialModule} from "./material.module";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatInputModule
  ],
  exports:[
    MaterialModule,
    RouterModule,
    CommentsComponent
  ]
})
export class SharedModule { }
