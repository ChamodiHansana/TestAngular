import {Injectable} from '@angular/core';
import {Icustomer} from './Icustomer';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';



@Injectable()
export class CustomerService{
    constructor(private httpClient: HttpClient ){}
    baseUrl='http://localhost:3000/customers';

    getCustomers(): Observable<Icustomer[]>{
        return this.httpClient.get<Icustomer[]>(this.baseUrl)
        .pipe(catchError(this.handleError));
    }

   
    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
        } else {
        
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
        }

    getCustomer(id: number): Observable<Icustomer>{
        return this.httpClient.get<Icustomer>('${this.baseUrl}/${id}')
        .pipe(catchError(this.handleError));
    }



    addCustomer(customer: Icustomer): Observable<Icustomer>{
        return this.httpClient.post<Icustomer>(this.baseUrl, customer, {
           headers: new HttpHeaders({
               'Content-Type': 'application/json'
           })
        })
        .pipe(catchError(this.handleError));

       }
    }
   



