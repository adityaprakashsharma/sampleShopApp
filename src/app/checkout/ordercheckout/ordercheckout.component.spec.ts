import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercheckoutComponent } from './ordercheckout.component';

describe('OrdercheckoutComponent', () => {
  let component: OrdercheckoutComponent;
  let fixture: ComponentFixture<OrdercheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
