import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpipayComponent } from './upipay.component';

describe('UpipayComponent', () => {
  let component: UpipayComponent;
  let fixture: ComponentFixture<UpipayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpipayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpipayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
