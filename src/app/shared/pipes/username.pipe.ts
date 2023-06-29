import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:"username"
})

export class UsernamePipe implements PipeTransform{
  transform(user:{firstName: string, lastName:string}, locale:'en'|'fr' = 'fr'): string {
    return locale == 'fr' ? `${user.lastName.toUpperCase()} ${user.firstName}` :
      `${user.firstName} ${user.lastName}`
  }
}
