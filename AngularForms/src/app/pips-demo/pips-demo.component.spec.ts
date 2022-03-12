import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipsDemoComponent } from './pips-demo.component';

describe('PipsDemoComponent', () => {
  let component: PipsDemoComponent;
  let fixture: ComponentFixture<PipsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
