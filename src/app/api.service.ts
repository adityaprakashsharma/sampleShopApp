import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs' ;
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "https://fakestoreapi.com/products/";
  private productsData ;

  constructor(private httpClient: HttpClient ) { }

  
  handleError( error: HttpErrorResponse ){
    let errorMessage = 'Unknown error !';
    if(error.error instanceof ErrorEvent ) {
      //Client side error
      errorMessage = `Error: ${error.error.message}`;
    }else {
      // Server-side errors
      errorMessage = `Error Code: ${ error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

  }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }



  public sendGetRequest() {
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError))
  }
}
