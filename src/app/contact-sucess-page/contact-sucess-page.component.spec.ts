import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSucessPageComponent } from './contact-sucess-page.component';

describe('ContactSucessPageComponent', () => {
  let component: ContactSucessPageComponent;
  let fixture: ComponentFixture<ContactSucessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSucessPageComponent]
    });
    fixture = TestBed.createComponent(ContactSucessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
