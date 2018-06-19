import {async, TestBed} from '@angular/core/testing';
import {CurrencyService} from './currency.service';
import {HttpErrorResponse} from '@angular/common/http';

describe('CurrencyService', () => {
  let currencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyService]
    });
  });

  it('should get currency by id 1', async(() => {
    currencyService.getCurrencyById('1').subscribe((currency) => {
      expect(currency.id).toEqual(1);
    });
  }));

  it('should fail getting currency by no id', async(() => {
    currencyService.getCurrencyById('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));
});
