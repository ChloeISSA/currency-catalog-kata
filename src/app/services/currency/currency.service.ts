import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import {Currency} from '../../models/currency';
import {LoggerService} from '../Logger/logger.service';
import {CurrencyData} from '../../models/currency-data';

const currencyList = response => Array.from(response.json()) as Currency[] || [];
const selectedCurrency = response => response.json() as Currency || null;

@Injectable()
export class CurrencyService {
  private currencies: Currency[] = CurrencyData.currencies;
  private currencyUrl: string = 'https://api.openfintech.io/v1/currencies';
  
  constructor(private httpClient: HttpClient, private http: Http) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      LoggerService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
    getCurrencyListByAPi(): Promise<Currency[]> {
      return this.http.get(this.currencyUrl)
      .toPromise().then(currencyList);
    }
  
    getCurrencyList(): Promise<Currency[]> {
      return Promise.resolve(this.currencies);
    }

    getCurrencyByIdByAPI(id: string): Observable<Currency> {
      const url = `${this.currencyUrl}/${id}`;
      return this.httpClient.get<Currency>(url).pipe(
        tap(() => LoggerService.log(`fetched Currency id=${id}`)),
        catchError(this.handleError<Currency>(`getCurrency id=${id}`))
      );
    }
  
  public getCurrencyById(id: string): Promise<Currency> {
    const currencies = this.currencies.filter(currency => currency.id === id);
      return Promise.resolve(currencies[0]);
  }

}
