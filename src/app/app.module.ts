import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyDetailsComponent } from "./currency-details/currency-details.component";
import { CurrencyService } from './services/currency/currency.service';
import { CurrencyListComponent } from './currency_list/currencyList.component';
import { MaterialModule } from "./material.module";
import { LoggerService } from "./services/Logger/logger.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import 'hammerjs';


const routes: Routes = [
  {path: 'currencies', component: CurrencyListComponent},
  {path: 'currency/:id', component: CurrencyDetailsComponent},
  {path: '', redirectTo: '/currencies', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [CurrencyService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
