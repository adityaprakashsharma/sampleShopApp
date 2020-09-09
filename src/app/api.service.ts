import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs' ;
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "https://fakestoreapi.com/products/";
  public first: string = "";  
  public prev: string = "";  
  public next: string = "";  
  public last: string = "";

  constructor(private httpClient: HttpClient ) { }

    parseLinkHeader(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });

    this.first  = links["first"];
    this.last   = links["last"];
    this.prev   = links["prev"];
    this.next   = links["next"]; 
  }

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
