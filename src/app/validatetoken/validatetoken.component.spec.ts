import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatetokenComponent } from './validatetoken.component';

describe('ValidatetokenComponent', () => {
  let component: ValidatetokenComponent;
  let fixture: ComponentFixture<ValidatetokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatetokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatetokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
