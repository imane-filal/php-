import {Injectable} from '@angular/core'
import {HttpClient,HttpParams} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'

import {Demande} from './demande'
import {HttpErrorHandler,HandleError} from '../http-error-handler.service'

@Injectable()
export class DemandeService{
    private handleError:HandleError
    constructor(private http:HttpClient,httpErrorHandler:HttpErrorHandler){
        this.handleError=httpErrorHandler.createHandleError('DemandeService')
    }
    getDemande():Observable<Demande[]>{
        return this.http
               .get<Demande[]>('api/demandes')
               .pipe(catchError(this.handleError('getDemande',[])));
    }
    addDemande(demande:Demande):Observable<Demande[]>{
        return this.http
               .post<Demande[]>('api/demandes',demande)
               .pipe(catchError(this.handleError('postDemande',[])));
    }
    
  
    
}