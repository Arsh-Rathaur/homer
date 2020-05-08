import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { result } from 'src/Model/Result';
import { loginViewModel } from 'src/Model/login';


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  configUrl = 'https://localhost:44329/api/sampleTest';

  constructor(private http: HttpClient) { }

  // getSample() {
  //   return this.http.get(this.configUrl).pipe(

  //   );
  // }

  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(this.configUrl)
      .pipe(tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any[]>('getHeroes', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }
}

