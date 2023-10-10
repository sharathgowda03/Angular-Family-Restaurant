import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInvoiceComponent } from './payment-invoice.component';

describe('PaymentInvoiceComponent', () => {
  let component: PaymentInvoiceComponent;
  let fixture: ComponentFixture<PaymentInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentInvoiceComponent]
    });
    fixture = TestBed.createComponent(PaymentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
