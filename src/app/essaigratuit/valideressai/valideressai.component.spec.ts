import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideressaiComponent } from './valideressai.component';

describe('ValideressaiComponent', () => {
  let component: ValideressaiComponent;
  let fixture: ComponentFixture<ValideressaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValideressaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValideressaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
