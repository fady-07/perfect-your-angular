import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { CommentsComponent } from './components/comments/comments.component';
import {MaterialModule} from "./material.module";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ShortenPipe} from "./pipes/Shorten.pipe";
import {UsernamePipe} from "./pipes/username.pipe";
import {TimeAgoPipe} from "./pipes/time-ago.pipe";
import {HighLightDirective} from "./directives/highLight.directive";



@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighLightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports:[
    MaterialModule,
    RouterModule,
    CommentsComponent,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighLightDirective
  ]
})
export class SharedModule { }
