import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'social-media', loadChildren:()=> import('./social-media/social-media-routing.module').then(
    m => m.SocialMediaRoutingModule
  )},
  {path:'**',redirectTo:'social-media'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
