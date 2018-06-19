import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDetailsComponent } from './currency-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CurrencyDetailsComponent', () => {
  let component: CurrencyDetailsComponent;
  let fixture: ComponentFixture<CurrencyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyDetailsComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
