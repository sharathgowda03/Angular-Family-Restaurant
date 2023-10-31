import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMessageDialogComponentComponent } from './success-message-dialog-component.component';

describe('SuccessMessageDialogComponentComponent', () => {
  let component: SuccessMessageDialogComponentComponent;
  let fixture: ComponentFixture<SuccessMessageDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessMessageDialogComponentComponent]
    });
    fixture = TestBed.createComponent(SuccessMessageDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
