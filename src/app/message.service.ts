import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

import { Message } from './message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messageUrl)
      .pipe(
        tap(_ => console.log('got messages')),
        catchError(this.handleError('getMessages', []))
      )
  }

  private messageUrl = 'https://gschool-api.herokuapp.com/api/messages'
    //<T> defines a generic and captures the passed in type
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      console.error(error)

      console.log(`${operation} failed: ${error.message}`)
      // return properly typed result so app can continue execution 
      return of(result as T)
    }
  }
}
