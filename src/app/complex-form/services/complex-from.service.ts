import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ComplexFormValue} from "../models/complex-form-value.model";
import {catchError, delay, map, mapTo, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class ComplexFromService {
  constructor(private http:HttpClient) {
  }

  saveUserInfo(formValue:ComplexFormValue):Observable<boolean>{
    return this.http.post<boolean>(`${environment.apiUrl}/users`,formValue).pipe(
      map(()=>true),
      delay(1000),
      catchError(()=> of(false).pipe(
        delay(1000)
      ))
    );
  }
}
