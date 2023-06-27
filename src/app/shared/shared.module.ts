import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import { CommentsComponent } from './components/comments/comments.component';
import {MaterialModule} from "./material.module";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    MaterialModule,
    RouterModule,
    CommentsComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
