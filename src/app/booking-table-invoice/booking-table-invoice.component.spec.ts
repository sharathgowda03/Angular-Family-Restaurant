import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTableInvoiceComponent } from './booking-table-invoice.component';

describe('BookingTableInvoiceComponent', () => {
  let component: BookingTableInvoiceComponent;
  let fixture: ComponentFixture<BookingTableInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingTableInvoiceComponent]
    });
    fixture = TestBed.createComponent(BookingTableInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
