import {Injectable} from '@angular/core'
import {HttpClient,HttpParams} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'

import {Nontraite} from './nontraiter'
import {HttpErrorHandler,HandleError} from '../http-error-handler.service'

@Injectable()
export class NontraiterService{
    private handleError:HandleError
    constructor(private http:HttpClient,httpErrorHandler:HttpErrorHandler){
        this.handleError=httpErrorHandler.createHandleError('NontraiterService')
    }
    getNontraites():Observable<Nontraite[]>{
        return this.http
               .get<Nontraite[]>("api/demandes")
               .pipe(catchError(this.handleError("getNontraites",[])));
    }
   deleteNontraites(id: number):Observable<{}>{
       const url =`api/demandes/${id}`;
       return this.http.delete(url)
       .pipe(catchError(this.handleError("deleteNontraites")))
   }

    
}