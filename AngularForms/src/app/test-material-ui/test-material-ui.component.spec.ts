import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMaterialUiComponent } from './test-material-ui.component';

describe('TestMaterialUiComponent', () => {
  let component: TestMaterialUiComponent;
  let fixture: ComponentFixture<TestMaterialUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMaterialUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMaterialUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
