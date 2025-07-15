import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTheFold } from './above-the-fold';

describe('AboveTheFold', () => {
  let component: AboveTheFold;
  let fixture: ComponentFixture<AboveTheFold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboveTheFold]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveTheFold);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
