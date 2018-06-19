import { Attributes } from "../models/attributes";
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CurrencyService } from '../services/currency/currency.service';
import {Currency} from '../models/currency';
import { Router } from "@angular/router";
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-currencyList',
  templateUrl: './currencyList.component.html',
  styleUrls: ['./currencyList.component.css']
})
export class CurrencyListComponent implements OnInit {
  currencies : Currency[];
  error: string;
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private currencyService: CurrencyService,
              private router: Router) {
  }

  ngOnInit() {
    this.currencyService.getCurrencyList().then( currencies => this.currencies = currencies );
  }
  

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  applyFilterById(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // defaults to lowercase matches
    this.currencies.filter(currency => currency.id === filterValue);
  }

}
