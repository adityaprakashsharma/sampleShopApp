import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, map, catchError, retry } from 'rxjs/operators';
import { AboutComponent } from '../about/about.component';

@Injectable({
    providedIn: 'root'
})

export class AppInterceptor implements HttpInterceptor {

    private cache = new Map<string, any>();

    intercept ( req: HttpRequest<any>,next: HttpHandler ): Observable<HttpEvent<any>> {
        // if(req.url.match(/api.cosmicjs/)) {
        //     let params = new HttpParams({ fromString: req.params.toString() });
        //     if(req.method === 'GET' ){
        //         params = params.append('read_key', environment.read_key);
        //         req = req.clone({
        //             params: params
        //         });
        //     } else {
        //         let payload = JSON.parse(req.body);
        //         payload.write_key = environment.write_key;
        //         req = req.clone({
        //             body: payload
        //         });
        //     }
        // }
        // return next.handle(req).do(evt => {
        //     if (evt instanceof HttpResponse) {
        //       console.log('---&gt; status:', evt.status);
        //       console.log('---&gt; filter:', req.params.get('filter'));
        //     }
        //   })
        const modifiedReq = req.clone({
            setHeaders: { "content-type": "application/json"}
        })
          const cachedResponse = this.cache.get(req.url);
          if(cachedResponse){
              console.log("We are sending cached REsponse == >", cachedResponse)
              return of(cachedResponse)
          }

          return next.handle(modifiedReq).pipe(
              retry(3),
              map((evt: HttpEvent<any>) => {
              if(evt instanceof HttpResponse){
//                const modEvent = evt.body.filter( elem => elem.category === "electronics");
                const modEvent = evt.clone({body: evt.body.filter( elem => elem.category === "electronics")})  
                return evt;
              }
             }
          ),
          catchError((error: HttpErrorResponse) => {
                if(error.status !== 401){
                    console.log("Error === ",error) ;
                }

                return throwError(error);
          })
        )

    }
}