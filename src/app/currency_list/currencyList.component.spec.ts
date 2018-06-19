import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyListComponent } from './currencyList.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CurrencyDetailsComponent', () => {
  let component: CurrencyListComponent;
  let fixture: ComponentFixture<CurrencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyListComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
