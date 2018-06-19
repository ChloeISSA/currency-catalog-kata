import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import { CurrencyService } from '../services/currency/currency.service';
import {Currency} from '../models/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currency: Currency;

  constructor(private routeActivate: ActivatedRoute,
              private currencyService: CurrencyService,
              private router: Router,
              private location: Location
            ) { }

  ngOnInit() {
    this.currencyService.getCurrencyById(this.routeActivate.snapshot.params['id']).then( currency => this.currency = currency);
  }
  
  goBack(): void {
    this.location.back();
  }

}
