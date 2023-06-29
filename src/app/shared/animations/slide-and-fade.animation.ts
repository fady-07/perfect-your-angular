import {animate, animation, style} from "@angular/animations";

export const slideAndFadeAnimation = animation([
  style({
    transform:'translatex(-100%)',
    opacity:0,
    'background-color': 'rgba(201,157,242)'
  }),
  animate('250ms ease-out', style({
    transform:'translatex(0)',
    opacity:1,
    'background-color': 'white'
  }))
])
